import { project } from "./createprojects"
import { enableEditforCard } from "./editablecard"
import { addTask } from "./addtask"


function addTaskButton(){
    const content = document.querySelector(".content")

    const button = document.createElement("button")
    button.classList.add("card")
    button.textContent = " + "

    content.appendChild(button)

    button.addEventListener("click",()=>{
        content.removeChild(button)
        addTask()
        content.appendChild(button)
    })

}

export {addTaskButton}