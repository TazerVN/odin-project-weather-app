const projectsSidebar = document.querySelector(".projectlist");

class displaySidebar {
  constructor(project) {
    this.title = project.title;
    this.description = project.description;
    this.todoList = project.todoList;
    this.projectli = document.createElement("li");
  }

  populateSidebar(project) {
    this.projectli.classList.add("project");

    const projectTitle = document.createElement("div");
    projectTitle.classList.add("projectTitle");
    projectTitle.textContent = this.title;
    projectTitle.addEventListener("click", () => {
      project.toView();
    });

    // const todoList = document.createElement("ul");
    // todoList.classList.add("listing");

    // project.todoList.forEach((todo) => {
    //   const todoTitle = document.createElement("li");
    //   todoTitle.classList.add("project");
    //   todoTitle.textContent = todo.title;
    //   todoList.appendChild(todoTitle);
    // });

    this.projectli.appendChild(projectTitle);
    // this.projectli.appendChild(todoList);
    projectsSidebar.appendChild(this.projectli);
  }

  removeSidebar() {
    projectsSidebar.removeChild(this.projectli);
  }
}

export { displaySidebar };
