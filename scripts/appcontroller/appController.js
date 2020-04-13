
const eventHub = document.querySelector(".main")

let pageState = "politicians"

eventHub.addEventListener("seeCorporationsButtonClicked", event => {
    pageState = "corps"
    pageStateChanged()
})

eventHub.addEventListener("seePoliticiansButtonClicked", event => {
    pageState = "politicians"
    pageStateChanged()
})

eventHub.addEventListener("seePACsButtonClicked", event => {
    pageState = "pacs"
    pageStateChanged()
})

const hideAllComponents = () => {
    const componentArray = [
        '.politiciansContainer',
        '.corpsContainer',
        '.pacsContainer'
    ]

    const buttonArray = [
        '#seePoliticians',
        '#seeCorporations',
        '#seePACs'
    ]

    componentArray.forEach(component => document.querySelector(component).classList.add("hidden"))
    buttonArray.forEach(component => document.querySelector(component).classList.remove("constantWiggle"))
}

export const pageStateChanged = () => {
    //add the "hidden" class to all components to reset the app state before running the logic
    hideAllComponents()

    if (pageState === "politicians") {
        document.querySelector(".politiciansContainer").classList.remove("hidden")
        document.querySelector("#seePoliticians").classList.add("constantWiggle")
    } else if (pageState === "corps") {
        document.querySelector(".corpsContainer").classList.remove("hidden")
        document.querySelector("#seeCorporations").classList.add("constantWiggle")
    } else if (pageState === "pacs") {
        document.querySelector(".pacsContainer").classList.remove("hidden")
        document.querySelector("#seePACs").classList.add("constantWiggle")
    }
}
