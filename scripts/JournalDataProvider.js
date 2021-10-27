/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "10/06/2021",
        concept: "HTML & CSS",
        logEntry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Soso"
    },    
    {
        id: 2,
        date: "10/08/2021",
        concept: "DOM and JS",
        logEntry: "We talked about DOM and how to update html through JS.",
        mood: "Frustrated"
    },
    {
        id: 3,
        date: "10/14/2021",
        concept: "JS automation",
        logEntry: "We did the book1: chapter 10.  We learned how to automate and post the results in the HTML page.  It is confusing but I will understand it soon.",
        mood: "Frustrated"
    },
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}