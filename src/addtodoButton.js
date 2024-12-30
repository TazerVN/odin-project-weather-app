function newtoDoButton(card){
    const toDoButton = document.createElement("button")
    toDoButton.textContent = "New To-do"
    card.appendChild(toDoButton)

}

export {newtoDoButton}