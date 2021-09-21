/**
 * TODO
  :host {
    // validate accessibility is not an issue: https://developer.mozilla.org/en-US/docs/Web/CSS/display#display_contents
    display: contents;
  }
 */

/**
 * komore router element
 */
 export class KRouterElement extends HTMLElement {
  /**
   * Class constructor
   */
  constructor() {
    super();
  }
}

customElements.define('k-router', KRouterElement);
