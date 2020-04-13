const eventHub = document.querySelector(".main")

const poliTarget = document.querySelector(".politiciansContainer")
const corpTarget = document.querySelector(".corpsContainer")
const pacTarget = document.querySelector(".pacsContainer")

eventHub.addEventListener("click" , event => {
    let buttonWasClickedEvent = ""
    if (event.target.id === "seeCorporations") {
        buttonWasClickedEvent = new CustomEvent("seeCorporationsButtonClicked")
    } else if (event.target.id === "seePoliticians") {
        buttonWasClickedEvent = new CustomEvent("seePoliticiansButtonClicked")
    } else if (event.target.id === "seePACs") {
        buttonWasClickedEvent = new CustomEvent("seePACsButtonClicked")
    }
    eventHub.dispatchEvent(buttonWasClickedEvent)
})