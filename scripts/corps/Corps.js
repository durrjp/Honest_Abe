export const Corp = (corp) => {
    return `
    <section class="corporation card">
        <header class="corporation__name cardHeader">
            <h1>${corp.company}</h1>
        </header>
        <div class="corporation__info">
            <div>Address: ${corp.address}</div>
        </div>
    </section>
    `
}