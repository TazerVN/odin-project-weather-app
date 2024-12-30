import "./styles.css";
import { compareAsc, format } from "date-fns";
import { project } from "./createprojects";
import { newInstance } from "./masterInstance";
import { displayContentCard } from "./displaycontent";
import { displaySidebar } from "./displaysidebar";
import { addTaskButton } from "./addTaskButton";
import { saveObject, restoreObject } from "./save";
import stringify from "fast-json-stable-stringify";
import { toggleTheme } from "./toggleTheme";

if (!localStorage.getItem("local")) {
  const newLocal = new newInstance("local");
  const defaultProject = new project("Default Project", "Default Description")
  defaultProject.createTodo("Default Todo","Default Todo Description", format(new Date(), "Pp"), "4")
  newLocal.addProject(defaultProject)
  saveObject(newLocal);
  alert("DISCLAIMER: The project used the local storage of your browser. The current working data is not transferable and could easily be wiped. You have been warned. hehe")
}

const save = JSON.parse(localStorage.getItem("local"));
let local;
if (save.__class__ === "Instance") {
  local = newInstance.fromJSON(save);
}

console.log(local);
local.display();
// toggleTheme()

const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  local.projectList.forEach((project) => {
    const isVisible =
      project.title.toLowerCase().includes(value) ||
      project.todoList.find(e => e.title.toLowerCase().includes(value))
      console.log(project.contentcard.element)
    project.contentcard.card.classList.toggle("hide", !isVisible)
  });
});

const submitButton = document.querySelectorAll(".save")



export { local };


