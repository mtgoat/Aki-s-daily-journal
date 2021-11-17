import {useJournals, updateJournal, useMoods, getMoods} from "./JournalDataProvider.js"
import {JournalList} from "./JournalList.js"


// We're going to print the edit form where the "add note" form usually goes. We could move it around on the page by changing our content target.
const contentTarget = document.querySelector(".journalbox")

export const JournalEditForm = (journalId) => {
    getMoods()
    .then (()=> {
    // Give this component access to our application's notes state
    const allJournals = useJournals();

    // Find the note that we clicked on by its unique id
    
    const journalWeWantToEdit = allJournals.find(singleJournal => singleJournal.id === journalId)
    
    const moodsArray = useMoods()
    // Print the form
    // We'll use the HTML value attribute to pre-populate our form fields with the note's info
    contentTarget.innerHTML = `
        <h4>Edit Journal Entry</h4>
            <input type="date" id="journal-date" value="${journalWeWantToEdit.date}" />

            <input type="text" value="${journalWeWantToEdit.concept}" id="journal-concept" />

            <input type="text" value="${journalWeWantToEdit.logEntry}" id="journal-entry" />
       
            <label for="mood-select">Choose a mood for the day:</label>
            <select name="moods" id="mood-select">
                ${moodsArray.map(singleObject => singleObject.id === journalWeWantToEdit.mood.id ? ` <option selected id="display-journal-mood--${singleObject.id}" value="${singleObject.label}">${singleObject.label}</option>
                `: `<option id="display-journal-mood__${singleObject.id}" value="${singleObject.label}">${singleObject.label}</option>`
                            
           
            ).join("")}
            
            </select><button id="saveJournalChanges-${journalId}">Save Changes</button>
    `
   })
}

//this is to save the edited information to the database

contentTarget.addEventListener("click", (event) => {
    if(event.target.id.startsWith("saveJournalChanges")){

        // Make a new object representation of a note
        const editedJournal = {
            id: +event.target.id.split("-")[1],
            date:document.querySelector("#journal-date").value,
            concept:document.querySelector("#journal-concept").value,
            logEntry: document.querySelector("#journal-entry").value,
            mood: document.querySelector("#mood-select").value
        }

        // Send to json-server and refresh the list
        console.log(editedJournal)
        updateJournal(editedJournal).then(JournalList)

    }
})
