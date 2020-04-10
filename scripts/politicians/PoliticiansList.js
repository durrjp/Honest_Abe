import { usePoliticians } from "./politicianProvider.js"
import { Politician } from "./Politicians.js"
import { usepacDonations } from "../pacs/pacDonoProvider.js"
import { usePACs } from "../pacs/PACProvider.js"
import { useCorpInterests } from "../corps/corpInterestsProvider.js"
import { useBills } from "../bills/billsProvider.js"
import { usePoliticianBills } from "./politicianBillProvider.js"
import { useInterests } from "../interests/interestsProvider.js"
import { useCorps } from "../corps/corpsProvider.js"

const contentTarget = document.querySelector(".politiciansList")

export const PoliticiansList = () => {
    const render = () => {
        const politicians = usePoliticians()
        const pacDonos = usepacDonations()
        const pacs = usePACs()
        const interests = useInterests()
        const corpInterests = useCorpInterests()
        const bills = useBills()
        const politicianBills = usePoliticianBills()
        const corps = useCorps()

        const politicianHTML = politicians.map(politician => {
            const matchingPACdonos = pacDonos.filter(pacDono => politician.id === pacDono.politicianId)
            const matchingPACs = matchingPACdonos.map(matchingPACdono => {
                return pacs.find(pac => matchingPACdono.pacId === pac.id)
            })

            const matchingPoliticianBills = politicianBills.filter(poliBill => poliBill.politicianId === politician.id)
            const matchingBills = matchingPoliticianBills.map(matchPoliBill => {
                return bills.find(bill => bill.id === matchPoliBill.legislationId)
            })

            const matchingInterests = matchingBills.map(matchyBill => {
                return interests.find(interest => matchyBill.interestId === interest.id)
            })

            let filteredCorps = []
            const matchingCorpInterests = matchingInterests.map(matchingInt => {
                const filteredCorpInterests = corpInterests.filter(corpInterest => matchingInt.id === corpInterest.interestId)
                filteredCorps = filteredCorpInterests.map(fCI => {
                    return corps.find(corp => corp.id === fCI.corporationId)
                })
            })

            return Politician(politician, matchingPACdonos, matchingPACs, matchingBills, matchingInterests, filteredCorps)
        }).join("")
        contentTarget.innerHTML += politicianHTML
    }
    render()
}


