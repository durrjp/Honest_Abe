import { usePACs } from "./PACProvider.js"
import { useCorpDonations } from "../corps/corpDonationProvider.js"
import { useCorps } from "../corps/corpsProvider.js"
import { PAC } from "./PACs.js"

const contentTarget = document.querySelector(".pacsList")

export const PACList = () => {
    const pacs = usePACs()
    const corpDonations = useCorpDonations()
    const corps = useCorps()

    const render = () => {
        const pacsHTML = pacs.map(pac => {
            const corpDonationMatches = corpDonations.filter(corpDono => pac.id === corpDono.pacId)
            const matchingCorps = corpDonationMatches.map(corpDonation => {
                return corps.find(corp => corp.id === corpDonation.corporationId)
            })
            return PAC(pac, corpDonationMatches, matchingCorps)
        }).join("")
        contentTarget.innerHTML += pacsHTML

    }
    render()
}