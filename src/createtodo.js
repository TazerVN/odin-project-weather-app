import { toDate } from "date-fns";
import { getDate } from "date-fns";
import { format } from "date-fns";

class toDo {
  constructor(title, description, dueDate, piority, notes, ischeck) {
    this.title = title;
    this.description = description || "";
    this.dueDate = dueDate || "No Date";
    this.piority = piority || 4;
    this.notes = notes || "";
    this.ischeck = ischeck || false;
  }

  // set title(title){
  //   return this.title = title
  // }

  // set description(description){
  //   this.description = description
  // }

  // set dueDate(dueDate){
  //   this.dueDate = dueDate
  // }

  // set piority(piority){
  //   this.piority = piority
  // }

  toJSON() {
    return {
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      piority: this.piority,
      notes: this.notes,
      ischeck: this.ischeck,
      __class__: "todo",
    };
  }

  static fromJSON(data) {
    return new toDo(
      data.title,
      data.description,
      data.dueDate,
      data.piority,
      data.notes,
      data.ischeck
    );
  }
}

export { toDo };
