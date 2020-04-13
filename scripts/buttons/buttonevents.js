const eventHub = document.querySelector(".main")

eventHub.addEventListener("click" , event => {
    if (event.target.className !== "constantWiggle") {
        let buttonWasClickedEvent = ""
        if (event.target.id === "seeCorporations") {
            buttonWasClickedEvent = new CustomEvent("seeCorporationsButtonClicked")
        } else if (event.target.id === "seePoliticians") {
            buttonWasClickedEvent = new CustomEvent("seePoliticiansButtonClicked")
        } else if (event.target.id === "seePACs") {
            buttonWasClickedEvent = new CustomEvent("seePACsButtonClicked")
        }
        eventHub.dispatchEvent(buttonWasClickedEvent)
    }
})