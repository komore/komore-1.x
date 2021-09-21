const templateElement = document.createElement('template');

templateElement.innerHTML = `
<style>
</style>
`;

/**
 * Footer element
 */
export class FooterElement extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    const templateContent = templateElement.content.cloneNode(true);
    shadowRoot.append(templateContent);
  }
}

customElements.define('kw-footer', FooterElement);
