let  journals = [ ]

export const getJournals = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(jResponse => {
            journals = jResponse
            // What should happen when we finally have the array?
        })
}

export const saveJournals = (journal) => {
    return fetch('http://localhost:8088/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(journal)
    })
    
}

export const useJournals = () => {
    const sortedByDate = journals.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

export const deleteJournal = (journalId) => {
    return fetch(`http://localhost:8088/entries/${journalId}`, {
        method: "DELETE"
    })
}

export const updateJournal = (journal) => {
    return fetch(`http://localhost:8088/entries/${journal.id}`, {
        method: "PUT",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(journals)
    })
}