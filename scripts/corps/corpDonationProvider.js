let corpDonations = []

export const getCorpDonations = () => {
    return fetch('http://localhost:2999/corporatedonations')
        .then(response => response.json())
        .then(parsedcorpDonations => {
            corpDonations = parsedcorpDonations
        })
}
export const useCorpDonations = () => corpDonations.slice()