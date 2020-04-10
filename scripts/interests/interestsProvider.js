let interests = []

export const getInterests = () => {
    return fetch('http://localhost:2999/interests')
        .then(response => response.json())
        .then(parsedinterests => {
            interests = parsedinterests
        })
}
export const useInterests = () => interests.slice()