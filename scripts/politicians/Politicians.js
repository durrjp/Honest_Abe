export const Politician = (politician, matchingPACdonos, matchingPACs) => {
    
    return `
    <section class="politician">
        <header class="politician__name">
            <h1>${politician.name.first} ${politician.name.last}</h1>
        </header>
        <div class="politician__info">
            <div>Age: ${politician.age}</div>
            <div>Represents: ${politician.district}</div>
        </div>
        <div class="pac__donations">
            <h4>PAC Donations</h5>
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
    </section>
    `
}