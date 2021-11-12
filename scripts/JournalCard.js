/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const journals = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
        <h4 id="span--entry--${entry.id}" class="journalEntry-date">${new Date(entry.date).toLocaleDateString('en-US')}
    </h4>
        <h4 id="entry--concept" class="journalEntry-concept"><em>${entry.concept}</em></span>
        </h4>
        <div id="entry--logEntry" class="journalEntry">${entry.logEntry}</div>
        <p id="entry--${entry.mood}" class="journalEntry-mood">Mood: ${entry.mood}</p>
        <button id="deleteJournal--${entry.id}">Delete</button>
        </section>
    `
}
//need to work on how to make a gap between date and concept tags 