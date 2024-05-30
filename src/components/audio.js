import { listContents } from "../lib/utils.js";

class FileCard extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["name"];
  }

  static set() {}

  attributeChangedCallback(name, oldValue, newValue) {
    console.log({ name, oldValue, newValue });
    this.render();
  }

  render() {
    return `
      
    `;
  }



  connectedCallback() {
    this.innerHTML = this.render();
  }
}

export { FileCard };
export default FileCard;
