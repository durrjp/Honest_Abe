let pacDonations = []

export const getpacDonations = () => {
    return fetch('http://localhost:2999/pacdonations')
        .then(response => response.json())
        .then(parsedpacDonations => {
            pacDonations = parsedpacDonations
        })
}
export const usepacDonations = () => pacDonations.slice()