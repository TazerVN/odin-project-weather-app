import { local } from ".";
import { saveObject } from "./save";

function EditProject(card, project){
while(card.firstChild){
    card.removeChild(card.firstChild)
}
  const form = document.createElement("form");

  const title = document.createElement("label");
  title.textContent = "Project Title: ";
  title.setAttribute("for", "projectTitle");

  const inputTitle = document.createElement("input");
  inputTitle.focus()
  inputTitle.setAttribute("type", "text");
  inputTitle.setAttribute("name", "projectTitle");
  inputTitle.setAttribute("id", "projectTitle");
  inputTitle.setAttribute("autocomplete", "off");
  inputTitle.value = project.title



  title.appendChild(inputTitle);
  

  const description = document.createElement("label");
  description.setAttribute("for", "projectDescription");
  description.textContent = "Project Description: ";

  const inputDescription = document.createElement("input");
  inputDescription.setAttribute("type", "text");
  inputDescription.setAttribute("name", "projectDescription");
  inputDescription.setAttribute("id", "projectDescription");
  inputDescription.setAttribute("autocomplete", "off");
  inputDescription.value = project.description

  description.appendChild(inputDescription);

  const submitButton = document.createElement("button");
  submitButton.classList.add("save");
  submitButton.textContent = "Save";
  submitButton.addEventListener("click", () => {
    project.title = inputTitle.value
    project.description = inputDescription.value
    local.display()
    saveObject(local)

    card.removeChild(form)

  });

  const closeButton = document.createElement("span");
  closeButton.classList.add("card");
  closeButton.setAttribute("id", "remove");
  closeButton.textContent = "X";
  closeButton.addEventListener("click", () => {
    card.removeChild(form)
    local.display()
  });

  
  form.appendChild(closeButton);
  form.appendChild(title);
  form.appendChild(description);
  form.appendChild(submitButton);

  card.appendChild(form);
}

export {EditProject}