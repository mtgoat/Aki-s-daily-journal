import { deleteJournal, saveJournals } from "./JournalDataProvider.js"
import { JournalList } from "./JournalList.js" 

const contentTarget = document.querySelector(".journalbox")

export const JournalForm = () => {
    contentTarget.innerHTML = `
    <form action="">
        <fieldset> 
        <div class="journal-date">    
            <label for="journalDate">Date of entry</label>
            <input type="date" name="journalDate" id="journalDate">
        </div>

        <div class="journal-concept">
            <label for="concenptsCovered">Concenpts Covered</label>
            <input type="text" name="concenptsCovered" id="concenptsCovered">
        </div>

        <div class="journal-entry">
    
            <label for="journalEntry">Journal Entry</label>
            <textarea  name="journalEntry" id="journalEntry"></textarea> 
        </div>

        <div class="journal-mood">
            <label for="mood-select">Choose a mood for the day:</label>
            <select name="moods" id="mood-select">
                <option value=""> --Please choose an mood --</option>
                <option value="fair" id="fair">Fair to middling</option>
                <option value="sad" id="sad">Sad</option>
                <option value="mad" id="mad">Mad</option>
                <option value="overwhelmed" id="overwhelmed">Overwhelmed</option>
                <option value="Soso" id="soso">Meh/So so</option>
                <option value="frustrated" id="frustrated">Grrrr/Frustrated</option>
            </select>
        </div>
    </form>
    <button id="saveJournalEntry" type="submit" >Save Journal Entry</button>
    `
}

// Handle browser-generated click event in component

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveJournalEntry") {
        
        // Make a new object representation of a note
        const newJournal = {
            // Key/value pairs here
            date: document.querySelector("#journalDate").value,
            concept: document.querySelector("#concenptsCovered").value,
            logEntry: document.querySelector("#journalEntry").value,
            mood: document.querySelector("#mood-select").value
        }
        
        console.dir(newJournal)
        //below clears the input field after the save button is pushed
        document.querySelector("#journalDate").value = ""
        document.querySelector("#concenptsCovered").value = ""
        document.querySelector("#journalEntry").value = ""
        document.querySelector("#mood-select").value = ""
        // Change API state and application state
       
        saveJournals(newJournal)
        .then(JournalList) // Refresh your list of notes once you've saved your new one
    }
})


//this is to delete entry
const eventHub = document.querySelector(".old-entries")
eventHub.addEventListener("click", removeEvent => {
    if (removeEvent.target.id.startsWith("deleteJournal")) {
      const idToDelete = removeEvent.target.id.split("--")[1]
      // ---------- Write your code here -------------//
      // Call the deleteNote function and pass in the appropriate id
      
      console.log(idToDelete)
      deleteJournal (idToDelete)
      .then(JournalList)
      // Then call NoteList to refresh the list of notes
  
    }
  });
  