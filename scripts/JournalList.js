import { journals } from "./JournalCard.js"
import { useJournals, getJournals, saveJournals } from "./JournalDataProvider.js"


const contentTarget = document.querySelector(".old-entries")


export const JournalList = () => {
    getJournals ()
    .then(() => {
    let journalsArray = useJournals()

    let journalHTMLRepresentations = " ";
    
    journalsArray.forEach((singleEntryObject) => {
       
       journalHTMLRepresentations += journals(singleEntryObject);
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