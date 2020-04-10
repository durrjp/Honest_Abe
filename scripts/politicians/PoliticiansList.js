import { usePoliticians } from "./politicianProvider.js"
import { Politician } from "./Politicians.js"
import { usepacDonations } from "../pacs/pacDonoProvider.js"
import { usePACs } from "../pacs/PACProvider.js"

const contentTarget = document.querySelector(".politiciansContainer")

export const PoliticiansList = () => {
    const render = () => {
        const politicians = usePoliticians()
        const pacDonos = usepacDonations()
        const pacs = usePACs()

        const politicianHTML = politicians.map(politician => {
            const matchingPACdonos = pacDonos.filter(pacDono => politician.id === pacDono.politicianId)
            const matchingPACs = matchingPACdonos.map(matchingPACdono => {
                return pacs.find(pac => matchingPACdono.pacId === pac.id)
            })
            return Politician(politician, matchingPACdonos, matchingPACs)
        }).join("")
        contentTarget.innerHTML += politicianHTML
    }
    render()
}


