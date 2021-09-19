/**
 * Document tree node element
 */
export class KWDocumentTreeNodeElement extends HTMLAnchorElement {
  constructor() {
    super();
  }
}

customElements.define('kw-document-tree-node', KWDocumentTreeNodeElement, { extends: 'a' });
