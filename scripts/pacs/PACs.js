export const PAC = (pac, corpDonationMatches, matchingCorps) => {
    return `
    <section class="pac">
        <header class="pac__name">
            <h1>${pac.registeredName}</h1>
        </header>
        <div class="pac__info">
            <div>${pac.address}</div>
        </div>
        <div class="pac__donors">
            <h4>Donors</h4>
            <ul>
            ${
                corpDonationMatches.map(corpDono => {
                    const singleCorp = matchingCorps.find(matchingCorp => matchingCorp.id === corpDono.corporationId)
                    return `
                    <li>${singleCorp.company} ($${corpDono.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")})</li>
                    `
                }).join("")
            }
            </ul>
        </div>
    </section>
    `
}