import { useCorps } from "./corpsProvider.js"
import { Corp } from "./Corps.js"

const contentTarget = document.querySelector(".corpsList")

export const CorpsList = () => {
    const render = () => {
        const corps = useCorps()
        const corpsHTML = corps.map(corp => {
            return Corp(corp)
        }).join("")
        contentTarget.innerHTML += corpsHTML
    }
    render()
}