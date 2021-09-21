const templateElement = document.createElement('template');

templateElement.innerHTML = `
<style>
  :host {
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }

  :host > a {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--navigation-color-text, 000000);
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 300;
    padding: 0px 16px;
    box-sizing: border-box;
    border-top: solid 4px transparent;
    border-bottom: solid 4px transparent;
  }

  :host > a:hover {
    color: #4caf50;
  }

  :host > a.active {
    color: #4caf50;
    border-bottom-color: #4caf50;
  }
</style>
<a href="/overview">Overview</a>
<a class="active" href="/documentation">Documentation</a>
<a href="/blog">Blog</a>
`;

export class NavigationElement extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const templateContent = templateElement.content.cloneNode(true);
    shadowRoot.append(templateContent);
  }
}

customElements.define('kw-navigation', NavigationElement);
