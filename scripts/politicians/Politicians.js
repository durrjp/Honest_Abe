export const Politician = (politician, matchingPACdonos, matchingPACs, matchingBills, matchingInterests, matchingCorps) => {
    
    return `
    <section class="politician">
        <header class="politician__name">
            <h2>${politician.name.first} ${politician.name.last}</h2>
        </header>
        <div class="politician__info">
            <div>Age: ${politician.age}</div>
            <div>Represents: ${politician.district}</div>
        </div>
        <div class="politician__bills">
            <h4>Sponsored Bills</h5>
            <ul>
            ${
                matchingBills.length !== 0 ?
                matchingBills.map(matchBill => {
                    const singleInterest = matchingInterests.find(matchingInt => matchingInt.id === matchBill.interestId)
                    return `
                    <li>${matchBill.name} (Interest: ${singleInterest.about})</li>
                    `
                }).join("")
                : `<li>None</li>`
            }
            </ul>
        </div>
        <div class="pac__donations">
            <h4>PAC Donors</h5>
            <ul>
                ${
                    matchingPACdonos.length !== 0 ?
                    matchingPACdonos.map(pacDono => {
                        const singlepac = matchingPACs.find(matchingpac => matchingpac.id === pacDono.pacId)
                        return `
                            <li>${singlepac.registeredName} ($${pacDono.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")})</li>
                        `
                    }).join("")
                    : `<li>None</li>`
                }
            </ul>
        </div>
        <div class="politician__influencers">
            <h4>Influencing Corporations</h4>
            <ul>
                ${
                    matchingCorps.length !== 0 ?
                    matchingCorps.map(matchCorp => {
                        return `
                            <li>${matchCorp.company}</li>
                        `
                    }).join("")
                    :`<li>None</li>`
                }
            </ul>
        </div>
    </section>
    `
}