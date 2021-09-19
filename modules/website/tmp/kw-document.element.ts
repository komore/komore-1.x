const templateElement = document.createElement('template');

templateElement.innerHTML = `
Document
`;

export class KWDocumentElement extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const templateContent = templateElement.content.cloneNode(true);
    shadowRoot.append(templateContent);
  }
}

customElements.define('kw-document', KWDocumentElement);
