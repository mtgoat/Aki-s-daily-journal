import { journals } from "./JournalCard.js"
import { useJournals, getJournals, saveJournals, useMoods, getMoods } from "./JournalDataProvider.js"
import { JournalEditForm } from "./JournalEditForm.js"


const contentTarget = document.querySelector(".old-entries")


export const JournalList = () => {
    getJournals ()
    .then(getMoods)
    .then(() => {
        
    let journalsArray = useJournals()
    let moodsArray = useMoods() 

    let journalHTMLRepresentations = " ";
    
    journalsArray.forEach((singleEntryObject) => {
        
       let singleMood = moodsArray.find( singleMoodObject => singleEntryObject.moodId === singleMoodObject.id)
       //debugger
       journalHTMLRepresentations += journals(singleEntryObject, singleMood);
    });

    contentTarget.innerHTML += `
    <h2 class = "journal-list">Journal List</h2>
    ${journalHTMLRepresentations}
    `
})
}

//things to do later-navBar
/*//----------- nav bar.Note-----------//
const navBarNote = document.querySelector("#notes-nav-link")

navBarNote.addEventListener("click", () => {
    // invoke the function that prints the criminals
       NoteList ()
})*/