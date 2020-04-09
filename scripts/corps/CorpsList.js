import { useCorps } from "./corpsProvider"
import { Corp } from "./Corps"

const contentTarget = document

export const CorpsList = () => {
    const render = () => {
        const corps = useCorps()
        const corpsHTML = corps.map(corp => {
            return Corp(corp)
        })

    }
    render()
}