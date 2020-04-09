import { usePoliticians } from "./politicianProvider.js"
import { Politician } from "./Politicians.js"

const contentTarget = document.querySelector(".politiciansContainer")

export const PoliticiansList = () => {
    const render = () => {
        const politicians = usePoliticians()
        const politicianHTML = politicians.map(politician => {
            return Politician(politician)
        }).join("")
        
        contentTarget.innerHTML = politicianHTML
    }
    render()
}


