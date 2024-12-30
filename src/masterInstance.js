import { displayContentCard } from "./displaycontent";
import { displaySidebar } from "./displaysidebar";
import { addTaskButton } from "./addTaskButton";
import { saveObject } from "./save";
import { project } from "./createprojects";

const content = document.querySelector(".content");
const sidebar = document.querySelector(".projectlist");

class newInstance {
  constructor(name) {
    this.name = name;
    this.projectList = [];
    this.theme = "light";
  }

  addProject(project) {
    this.projectList.push(project);
  }

  removeProject(project) {
    this.projectList.splice(this.projectList.indexOf(project), 1);
    project.removeContent();
    this.saveInstance();
    this.display();
  }

  saveInstance() {
    saveObject(this);
  }

  display() {
    const instanceTitle = document.createElement("div");
    instanceTitle.classList.add("title");
    instanceTitle.textContent = this.name;

    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }

    while (sidebar.firstChild) {
      sidebar.removeChild(sidebar.firstChild);
    }

    content.appendChild(instanceTitle);

    this.projectList.forEach((project) => {
      project.contentcard = new displayContentCard(project);
      project.sidebar = new displaySidebar(project);
      project.populateContent();
    });

    addTaskButton();
  }

  toJSON() {
    return {
      name: this.name,
      projectList: this.projectList.map((p) => p.toJSON()),
      __class__: "Instance",
    };
  }

  static fromJSON(data) {
    const Instance = new newInstance(data.name);
    Instance.projectList = data.projectList.map((projectData) =>
      project.fromJSON(projectData)
    );
    return Instance;
  }
}

export { newInstance };
