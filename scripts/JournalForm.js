import { deleteJournal, saveJournals } from "./JournalDataProvider.js"
import { JournalList } from "./JournalList.js" 

const contentTarget = document.querySelector(".journalbox")

export const JournalForm = () => {
    contentTarget.innerHTML = `
    <form action="">
    <fieldset>
        <label for="journalDate">Date of entry</label>
        <input type="date" name="journalDate" id="journalDate">
    </fieldset>
</form>
</div>
<div class="concept">
    <form action="">
        <fieldset>
            <label for="concenptsCovered">Concenpts Covered</label>
            <input type="text" name="concenptsCovered" id="concenptsCovered">
        </fieldset>
    </form> 
</div>
<div class="journal entry">
    <form action="">
        <fieldset>
            <label for="journalEntry">Journal Entry</label>
            <textarea  name="journalEntry" id="journalEntry"></textarea> 
        </fieldset>
    </form>
</div>
<div class="mood">
    <form action="">
        <fieldset>
            <label for="mood">Mood for the day</label>
          <select id="moodChoises">
                <option value="Fair to middling" id="FairtoMiddling">Fair to middling</option>
                <option value="sad" id="sad">Sad</option>
                <option value="Mad" id="mad">Mad</option>
                <option value="Overwhelmed" id="overwhelmed">Overwhelmed</option>
                <option value="Soso" id="soso">Meh/So so</option>
                <option value="Frustrated" id="frustrated">Grrrr/Frustrated</option>
         </select>
        </fieldset>
    </form>
    <button id="saveJournalEntry">Save Journal Entry</button>
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
            mood: document.querySelector("#moodChoises").value
        }

        console.dir(newJournal)
        //below clears the input field after the save button is pushed
        document.querySelector("#journalDate").value = ""
        document.querySelector("#concenptsCovered").value = ""
        document.querySelector("#journalEntry").value = ""
        document.querySelector("#moodChoises").value = ""
        // Change API state and application state
        saveJournals(newJournal)
        .then(JournalList) // Refresh your list of notes once you've saved your new one
    }
})

const eventHub = document.querySelector("#entryLog")
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
  