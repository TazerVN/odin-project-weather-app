import { project } from "./createprojects";
import { local } from ".";
import { saveObject } from "./save";

function createNewProject(title, description) {
  const newproject = new project(title, description);
  local.addProject(newproject);
  local.saveInstance();
  local.display();
}

export { createNewProject };
