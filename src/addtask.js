import { createNewProject } from "./createNew";

const content = document.querySelector(".content");

function addTask() {
  const card = document.createElement("div");
  card.classList.add("card", "form");

  const form = document.createElement("form");

  const title = document.createElement("label");
  title.textContent = "Project Title";
  title.setAttribute("for", "projectTitle");

  const inputTitle = document.createElement("input");
  inputTitle.setAttribute("type", "text");
  inputTitle.setAttribute("name", "projectTitle");
  inputTitle.setAttribute("id", "projectTitle");
  inputTitle.setAttribute("autocomplete", "off");


  title.appendChild(inputTitle);

  const description = document.createElement("label");
  description.setAttribute("for", "projectDescription");
  description.textContent = "Project Description";

  const inputDescription = document.createElement("input");
  inputDescription.setAttribute("type", "text");
  inputDescription.setAttribute("name", "projectDescription");
  inputDescription.setAttribute("id", "projectDescription");
  inputDescription.setAttribute("autocomplete", "off");

  const submitButton = document.createElement("button");
  submitButton.classList.add("save");
  submitButton.textContent = "Save";
  submitButton.addEventListener("click", () => {
    createNewProject(inputTitle.value, inputDescription.value);
  });

  const closeButton = document.createElement("span");
  closeButton.classList.add("card");
  closeButton.setAttribute("id", "remove");
  closeButton.textContent = "X";
  closeButton.addEventListener("click", () => {
    content.removeChild(card);
  });

  description.appendChild(inputDescription);
  
  form.appendChild(closeButton);
  form.appendChild(title);
  form.appendChild(description);
  form.appendChild(submitButton);

  card.appendChild(form);
  content.appendChild(card);
}

export { addTask };
