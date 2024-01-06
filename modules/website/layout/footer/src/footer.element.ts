import { type FromChild } from '@komore/element';
import { NEVER, of, Subject, switchMap, takeUntil, type Observable } from '@komore/reactive';

const templateElement = document.createElement('template');

templateElement.innerHTML = `
<style>
  :host {
    background-color: var(--footer-color-background);
    color: var(--footer-color-text);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
    padding: 32px;
  }

  small {
    display: flex;
    align-self: stretch;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  div {
    > h3 {
      font-size: 1rem;
      font-weight: 300;
      text-transform: uppercase;
      opacity: 0.75;
      margin-bottom: 8px;
    }

    > ul {
      margin: 0px;
      padding: 0px;
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 4px;

      > li {
        margin: 0px;
        padding: 0px;

        > a {
          text-decoration: none;
          color: var(--footer-color-text);

          &:hover {
            color: var(--color-primary);
          }
        }
      }
    }
  }
</style>
<small> &copy; 2024 komore </small>
<div class="documentation">
  <h3>Documentation</h3>
  <ul>
    <li><a href="/guides">Guides</a></li>
    <li><a href="/modules">Modules</a></li>
    <li><a href="/reference">Reference</a></li>
  </ul>
</div>
<div class="help">
  <h3>Help</h3>
  <ul>
    <li><a href="https://github.com/komore/komore/issues/new" rel="noreferrer noopener" target="_blank">Report an Issue</a></li>
    <li><a href="TODO" rel="noreferrer noopener" target="_blank">Discord</a></li>
  </ul>
</div>
<div class="community">
  <h3>Community</h3>
  <ul>
    <li><a href="/blog">Blog</a></li>
    <li><a href="https://github.com/komore/komore/blob/main/CONTRIBUTING.md" rel="noreferrer noopener" target="_blank">Contributing</a></li>
    <li><a href="https://github.com/komore/komore/blob/main/CODE_OF_CONDUCT.md" rel="noreferrer noopener" target="_blank">Code of Conduct</a></li>
  </ul>
</div>
<div class="more">
  <h3>More</h3>
  <ul>
    <li><a href="/faq">FAQ</a></li>
    <li><a href="/privacy">Privacy</a></li>
    <li><a href="/terms">Terms</a></li>
  </ul>
</div>
`;

interface HeaderElementInput {
  readonly fromChild: FromChild;
}

function footerElement({ fromChild: _ }: HeaderElementInput): Observable<unknown> {
  return NEVER;
}

/**
 * Footer element
 */
export class FooterElement extends HTMLElement {
  private readonly created = new Subject<void>();
  private readonly destroyed = new Subject<void>();

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    const templateContent = templateElement.content.cloneNode(true);
    shadowRoot.append(templateContent);

    const fromChild = <ElementType extends Element>(selectors: string) =>
      of(shadowRoot.querySelector<ElementType>(selectors)!);

    const element$ = footerElement({ fromChild });

    this.created
      .asObservable()
      .pipe(switchMap(() => element$.pipe(takeUntil(this.destroyed))))
      .subscribe();
  }

  connectedCallback(): void {
    this.created.next();
  }

  disconnectedCallback(): void {
    // TODO: actually wrong, but no komore-element lifecycles yet
    this.destroyed.next();
  }
}

customElements.define('kw-footer', FooterElement);
