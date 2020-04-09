import { useCorps } from "./corpsProvider.js"
import { Corp } from "./Corps.js"

const contentTarget = document.querySelector(".corpsContainer")

export const CorpsList = () => {
    const render = () => {
        const corps = useCorps()
        const corpsHTML = corps.map(corp => {
            return Corp(corp)
        })
        contentTarget.innerHTML = corpsHTML
    }
    render()
}