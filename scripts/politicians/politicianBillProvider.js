let politicianBills = []

export const getPoliticianBills = () => {
    return fetch('http://localhost:2999/politicianlegislations')
        .then(response => response.json())
        .then(parsedpoliticianBills => {
            politicianBills = parsedpoliticianBills
        })
}
export const usePoliticianBills = () => politicianBills.slice()