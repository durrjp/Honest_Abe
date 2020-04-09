let politicians = []

export const getPoliticians = () => {
    return fetch('http://localhost:2999/politicians')
        .then(response => response.json())
        .then(parsedpoliticians => {
            politicians = parsedpoliticians
        })
}
export const usePoliticians = () => politicians.slice()