import { local } from ".";
import { format } from "date-fns";
import { saveObject } from "./save";


function EditTodo(task, todo) {
    while(task.firstChild){
        task.removeChild(task.firstChild)
    }
  const form = document.createElement("form");

  const title = document.createElement("label");
  title.textContent = "To-do Title:";
  title.setAttribute("for", "projectTitle");

  const inputTitle = document.createElement("input");
  inputTitle.setAttribute("type", "text");
  inputTitle.setAttribute("name", "projectTitle");
  inputTitle.setAttribute("id", "projectTitle");
  inputTitle.setAttribute("value", todo.title)
  inputTitle.focus()


  title.appendChild(inputTitle);

  const description = document.createElement("label");
  description.setAttribute("for", "projectDescription");
  description.textContent = "To-do Description:";

  const inputDescription = document.createElement("input");
  inputDescription.setAttribute("type", "text");
  inputDescription.setAttribute("name", "projectDescription");
  inputDescription.setAttribute("id", "projectDescription");
  inputDescription.setAttribute("value", todo.description)

  description.appendChild(inputDescription);

  const dueDate = document.createElement("label");
  dueDate.setAttribute("for", "dueDate");
  dueDate.textContent = "Due Date:";

  const inputDuedate = document.createElement("input");
  inputDuedate.setAttribute("type", "datetime-local");
  inputDuedate.setAttribute("name", "dueDate");
  inputDuedate.setAttribute("id", "dueDate");
  inputDuedate.setAttribute("value", format(new Date(todo.dueDate), 'yyyy-MM-dd\'T\'HH:mm'))


  dueDate.appendChild(inputDuedate);

  const piority = document.createElement("label");
  piority.setAttribute("for", "piority");
  piority.textContent = "Piority:";

  const inputPiority = document.createElement("select");
  inputPiority.setAttribute("name", "piority");
  inputPiority.setAttribute("id", "piority");


  for (let i = 1; i < 5; i++) {
    const option = document.createElement("option");
    option.setAttribute("value", i);
    option.textContent = i;
    inputPiority.appendChild(option);
    if(option.textContent === todo.piority){
      option.setAttribute("selected", "selected")
    }
  }


  piority.appendChild(inputPiority);

  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "button");
  submitButton.textContent = "Save";
  submitButton.classList.add("save");
  submitButton.addEventListener("click", () => {
    todo.title = inputTitle.value
    todo.description = inputDescription.value
    todo.dueDate = inputDuedate.value
    todo.piority = inputPiority.value
    local.display()
    saveObject(local)

    
    task.removeChild(form);
  });

  const closeButton = document.createElement("span");
  closeButton.classList.add("card");
  closeButton.setAttribute("id", "remove");
  closeButton.textContent = "X";
  closeButton.addEventListener("click", () => {
    task.removeChild(form);
    local.display()
  });

  form.appendChild(closeButton);
  form.appendChild(title);
  form.appendChild(description);
  form.appendChild(dueDate);
  form.appendChild(piority);
  form.appendChild(submitButton);

  task.appendChild(form);
}

export {EditTodo}