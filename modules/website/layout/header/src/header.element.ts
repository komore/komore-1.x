import './discord-icon.element';
import './github-icon.element';
import './komore-icon.element';
import './twitter-icon.element';

const templateElement = document.createElement('template');

templateElement.innerHTML = `
<style>
  :host {
    grid-area: header;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: var(--header-height);
    box-sizing: border-box;
    background-color: var(--header-color-background);
    border-bottom: solid 1px var(--header-color-border);
    padding: 0px 16px;
    gap: 16px;
  }
  
  :host > .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }
  
  :host > .logo > komore-icon {
    --komore-icon-width: 32px;
    --komore-icon-height: 32px;
  }
  
  :host > .logo > span {
    text-transform: uppercase;
    font-size: 1.25rem;
    font-weight: 300;
    color: var(--header-color-text);
  }
  
  :host > .sections {
    flex: 1;
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    margin-left: 64px;
  }
  
  :host > .sections > a {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--navigation-color-text, 000000);
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 300;
    padding: 0px 16px;
    box-sizing: border-box;
  }
  
  :host > .sections > a.active {
    color: var(--color-4);
  }
  
  :host > .sections > a::after {
    display: block;
    content: '';
    pointer-events: none;
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 4px;
    background-color: var(--color-4);
    transition: transform 0.25s linear;
    transform: scale(0, 1);
  }
  
  :host > .sections > a:hover::after,
  :host > .sections > a.active::after {
    transform: scale(1, 1);
  }
  
  :host > a > discord-icon {
    --discord-icon-color: var(--header-color-text);
    --discord-icon-color-background: var(--header-color-background);
  }
  
  :host > a > github-icon {
    --github-icon-color: var(--header-color-text);
    --github-icon-color-background: var(--header-color-background);
  }
  
  :host > a > twitter-icon {
    --twitter-icon-color: var(--header-color-text);
    --twitter-icon-color-background: var(--header-color-background);
  }
</style>
<div class="logo">
  <komore-icon></komore-icon>
  <span>komore</span>
</div>
<div class="sections">
  <a href="/guides">Guides</a>
  <a href="/modules" class="active">Modules</a>
  <a href="/reference">Reference</a>
  <a href="/blog">Blog</a>
</div>
<kw-search-input></kw-search-input>
<a class="link external github" href="https://github.com/komore/komore" title="GitHub" rel="noreferrer noopener" target="_blank">
  <github-icon></github-icon>
</a>
<a class="link external discord" href="#" title="Discord" rel="noreferrer noopener" target="_blank">
  <discord-icon></discord-icon>
</a>
<a class="link external twitter" href="https://twitter.com/komoredev" title="Twitter" rel="noreferrer noopener" target="_blank">
  <twitter-icon></twitter-icon>
</a>
`;

/**
 * Header element
 */
export class HeaderElement extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    const templateContent = templateElement.content.cloneNode(true);
    shadowRoot.append(templateContent);
  }
}

customElements.define('kw-header', HeaderElement);
