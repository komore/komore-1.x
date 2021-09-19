const templateElement = document.createElement('template');

templateElement.innerHTML = `
<style>
  :host {
    overflow-y: auto;
    background-color: #efefef;
    border-right: solid 1px #7f7f7f;
  }
</style>
Document tree
`;

export class KWDocumentTreeElement extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const templateContent = templateElement.content.cloneNode(true);
    shadowRoot.append(templateContent);
  }
}

customElements.define('kw-document-tree', KWDocumentTreeElement);
