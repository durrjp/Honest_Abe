let pacs = []

export const getPACs = () => {
    return fetch('http://localhost:2999/pacs')
        .then(response => response.json())
        .then(parsedpacs => {
            pacs = parsedpacs
        })
}
export const usePACs = () => pacs.slice()