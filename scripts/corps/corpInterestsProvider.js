let corpInterests = []

export const getCorpInterests = () => {
    return fetch('http://localhost:2999/corporateinterests')
        .then(response => response.json())
        .then(parsedcorpInterests => {
            corpInterests = parsedcorpInterests
        })
}
export const useCorpInterests = () => corpInterests.slice()