let corps = []

export const getCorps = () => {
    return fetch('http://localhost:2999/corporations')
        .then(response => response.json())
        .then(parsedcorps => {
            corps = parsedcorps
        })
}
export const useCorps = () => corps.slice()