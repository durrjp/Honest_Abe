let bills = []

export const getBills = () => {
    return fetch('http://localhost:2999/legislations')
        .then(response => response.json())
        .then(parsedbills => {
            bills = parsedbills
        })
}
export const useBills = () => bills.slice()