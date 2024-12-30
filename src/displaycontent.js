import { newInstance } from "./masterInstance";
import { enableEditforCard, disableEditforCard } from "./editablecard";
import { addTodo } from "./addtodo";
import { project } from "./createprojects";
import { local } from ".";
import { ElementVisibility } from "./setElementHidden";
import { displayTodoInfo } from "./displayTodoInfo";
import { EditTodo } from "./editTodo";
import { EditProject } from "./editProject";

const projectList = document.querySelector(".content");

class displayContentCard {
  constructor(project) {
    this.title = project.title;
    this.description = project.description;
    this.todoList = project.todoList;
    this.card = document.createElement("div");
  }

  populateCard(project) {
    this.card.classList.add("card");

    const projectTitle = document.createElement("div");
    projectTitle.textContent = this.title;
    projectTitle.classList.add("projecttitle");

    const projectDescription = document.createElement("div");
    projectDescription.textContent = this.description;
    projectDescription.classList.add("projectdescription");

    const allofTask = document.createElement("div");
    allofTask.classList.add("tasks");

    //todo list display

    project.todoList.forEach((todo) => {
      const task = document.createElement("div");
      task.classList.add("task");
      task.setAttribute(
        "for",
        String(local.projectList.indexOf(project)) +
          String(this.todoList.indexOf(todo))
      );


      const checkbox = document.createElement("input");
      checkbox.classList.add("checkbox");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("name", "todo");
      checkbox.setAttribute(
        "id",
        String(local.projectList.indexOf(project)) +
          String(this.todoList.indexOf(todo))
      );

      const label = document.createElement("label");
      label.classList.add("text");
      label.setAttribute(
        "id",
        String(local.projectList.indexOf(project)) +
          String(this.todoList.indexOf(todo))
      );

      console.log(todo.piority)

      switch (todo.piority){
        case "1":
          label.style.color = "rgb(212, 7, 7)";
          break
        case "2":
          label.style.color = "rgb(7, 7, 155)";
          break
          
        case "3":
          label.style.color = "rgb(3, 83, 3)";
          break

        case "4":
          break
      }

      label.textContent = todo.title;

     
      const labelDescription = document.createElement("label")
      labelDescription.setAttribute(
        "id",
        String(local.projectList.indexOf(project)) +
          String(this.todoList.indexOf(todo))
      );
      labelDescription.textContent = todo.description

      if (todo.ischeck == true) {
        checkbox.checked = true;
        label.style.textDecoration = "line-through";
        local.saveInstance();
      }

      checkbox.addEventListener("click", () => {
        if (checkbox.checked == true) {
          label.style.textDecoration = "line-through";
          todo.ischeck = true;
          local.saveInstance();
        } else {
          label.style.textDecoration = "none";
          todo.ischeck = false;
          local.saveInstance();
        }
      });

      const removeButton = document.createElement("span");
      removeButton.style.visibility = "hidden";
      removeButton.classList.add("card");
      removeButton.setAttribute("id", "remove");
      removeButton.textContent = "x";
      removeButton.addEventListener("click", () => {
        project.removeTodo(todo);
      });

      const editButton = document.createElement("span");
      editButton.style.visibility = "hidden";
      editButton.classList.add("card");
      editButton.setAttribute("id", "edit");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", ()=>{
        EditTodo(task, todo)
      })

      const visibilitytrackerforRemoveButton = new ElementVisibility(
        removeButton
      );
      const visibilitytrackerforEditButton = new ElementVisibility(editButton);
      const displayTodo = new displayTodoInfo(todo, task);

      task.addEventListener("mouseenter", () => {
        visibilitytrackerforRemoveButton.toggleElementVisibility();
        visibilitytrackerforEditButton.toggleElementVisibility();
        displayTodo.toggleInfo();
      });

      task.addEventListener("mouseleave", () => {
        visibilitytrackerforRemoveButton.toggleElementVisibility();
        visibilitytrackerforEditButton.toggleElementVisibility();
        displayTodo.toggleInfo();
      });

      label.appendChild(labelDescription)
      task.appendChild(checkbox);
      task.appendChild(label);
      task.appendChild(displayTodo.smallContainer);
      task.appendChild(editButton)
      task.appendChild(removeButton);
      allofTask.appendChild(task);
    });

    //end of todo list

    const todoButton = document.createElement("button");
    todoButton.classList.add("card");
    todoButton.textContent = "+";
    todoButton.addEventListener("click", () => {
      addTodo(this.card, project);
    });

    const removeButton = document.createElement("span");
    removeButton.style.visibility = "hidden";
    removeButton.classList.add("card");
    removeButton.setAttribute("id", "remove");
    removeButton.textContent = "x";
    removeButton.addEventListener("click", () => {
      local.removeProject(project);
    });

    const editButton = document.createElement("span");
    editButton.style.visibility = "hidden";
    editButton.classList.add("card");
    editButton.setAttribute("id", "edit");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", ()=>{
      EditProject(projectTitle, project)
    })

    const visibilitytrackerforRemoveButton = new ElementVisibility(
      removeButton
    );
    const visibilitytrackerforEditButton = new ElementVisibility(editButton);

    projectTitle.addEventListener("mouseenter", () => {
      visibilitytrackerforRemoveButton.toggleElementVisibility();
      visibilitytrackerforEditButton.toggleElementVisibility();
    });

    projectTitle.addEventListener("mouseleave", () => {
      visibilitytrackerforRemoveButton.toggleElementVisibility();
      visibilitytrackerforEditButton.toggleElementVisibility();
    });

    const buttondiv = document.createElement("div")



    allofTask.appendChild(todoButton);
    buttondiv.appendChild(editButton);
    buttondiv.appendChild(removeButton);
    projectTitle.appendChild(buttondiv)

    this.card.appendChild(projectTitle);
    this.card.appendChild(projectDescription);
    this.card.appendChild(allofTask);

    projectList.appendChild(this.card);
  }

  toView() {
    this.card.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }

  removeCard() {
    projectList.removeChild(this.card, project);
  }

  checkDuplicate() {}
}

export { displayContentCard };
