import { JournalEditForm } from "./JournalEditForm.js"
/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const journals = (entry, mood) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">

        <h4 id="entry--${entry.id}" class="journalEntry-date">${new Date(entry.date).toLocaleDateString('en-US')}
    </h4>
        <h4 id="entry--concept" class="journalEntry-concept"><em>${entry.concept}</em>
        </h4>
        <div id="entry--logEntry" class="journalEntry">${entry.logEntry}</div>
        <p id="entry--${mood.label}--${entry.moodId}" class="journalEntry-mood">Mood: ${mood.label}</p>
        <button id="deleteJournal--${entry.id}">Delete</button>
        <button id="editJournal--${entry.id}">Edit</button>
        </section>
    `
}
//need to work on how to make a gap between date and concept tags 

//this is an event listener for the edit button 


const eventHub = document.querySelector(".old-entries")

eventHub.addEventListener("click", eventObject => {

    let journalId = +eventObject.target.id.split("--")[1]
    //debugger
    JournalEditForm(journalId);
})

