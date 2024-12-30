class displayTodoInfo {
  constructor(todo, task) {
    this.title = todo.title;
    this.description = todo.description;
    this.dueDate = todo.dueDate;
    this.piority = todo.piority;
    this.container = task;
    this.toggle = false;
    this.smallContainer = document.createElement("div");
    this.info = this.displayInfo();
  }

  displayInfo() {

    const dueDate = document.createElement("div");
    dueDate.textContent = "Due Date: ";
    const dueDateDetail = document.createElement("div");
    dueDateDetail.textContent = this.dueDate;

    dueDate.appendChild(dueDateDetail);

    const piority = document.createElement("div");
    piority.textContent = "Piority: ";
    const piorityDetail = document.createElement("div");
    piorityDetail.textContent = this.piority;

    switch (this.piority){
      case "1":
        piorityDetail.style.color = "red";
        dueDateDetail.style.color = "red";
        break
      case "2":
        piorityDetail.style.color = "blue";
        dueDateDetail.style.color = "blue";

        break
        
      case "3":
        piorityDetail.style.color = "green";
        dueDateDetail.style.color = "green";
        break

      case "4":
        break
    }


    piority.appendChild(piorityDetail);

    this.smallContainer.classList.add("smallcard");
    this.smallContainer.style.display = "none";

    this.smallContainer.appendChild(dueDate);
    this.smallContainer.appendChild(piority);
  }

  toggleInfo() {
    if (this.toggle === false) {
      this.toggle = true;
    //   this.container.removeChild(this.smallContainer);
    this.smallContainer.style.display = "flex";
    } else {
      this.toggle = false;
    this.smallContainer.style.display = "none";
    //   this.container.appendChild(this.smallContainer);
    }
  }
}

export { displayTodoInfo };
