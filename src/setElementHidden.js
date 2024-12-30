class ElementVisibility {
  constructor(element) {
    this.element = element;
    this.visible = false;
  }

  toggleElementVisibility() {
    if (this.visible === true) {
      this.element.style.visibility = "hidden";
      this.visible = false;
    } else {
      this.element.style.visibility = "visible";
      this.visible = true;
    }

  }
}

export { ElementVisibility };
