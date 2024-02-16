import { type FromChild } from '@komore/element';
import { never, of, Subject, switchMap, takeUntil } from '@komore/reactive';

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

  h1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    text-transform: uppercase;
    font-size: 1.25rem;
    font-weight: 300;
    color: var(--header-color-text);

    & > komore-icon {
      --komore-icon-width: 32px;
      --komore-icon-height: 32px;
    }
  }

  nav {
    display: flex;
    flex-direction: row;

    &:not(.external) {
      flex: 1;
      align-self: stretch;
      align-items: stretch;
      margin-left: 64px;

      > a {
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

        &.active {
          color: var(--color-4);
        }

        &::after {
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

        &:hover::after,
        &.active::after {
          transform: scale(1, 1);
        }
      }
    }

    &.external {
      align-items: center;
      gap: 16px;

      discord-icon {
        --discord-icon-color: var(--header-color-text);
        --discord-icon-color-background: var(--header-color-background);
      }

      github-icon {
        --github-icon-color: var(--header-color-text);
        --github-icon-color-background: var(--header-color-background);
      }

      twitter-icon {
        --twitter-icon-color: var(--header-color-text);
        --twitter-icon-color-background: var(--header-color-background);
      }
    }
  }
</style>
<h1 class="logo">
  <komore-icon></komore-icon>
  komore
</h1>
<nav>
  <a href="/guides">Guides</a>
  <a href="/modules" class="active">Modules</a>
  <a href="/reference">Reference</a>
  <a href="/blog">Blog</a>
</nav>
<kw-search-input></kw-search-input>
<nav class="external">
  <a class="link external github" href="https://github.com/komore/komore" title="GitHub" rel="noreferrer noopener" target="_blank">
    <github-icon></github-icon>
  </a>
  <a class="link external discord" href="#" title="Discord" rel="noreferrer noopener" target="_blank">
    <discord-icon></discord-icon>
  </a>
  <a class="link external twitter" href="https://twitter.com/komoredev" title="Twitter" rel="noreferrer noopener" target="_blank">
    <twitter-icon></twitter-icon>
  </a>
</nav>
`;

interface HeaderElementInput {
  readonly fromChild: FromChild;
}

function headerElement({ fromChild }: HeaderElementInput): Observable<unknown> {
  fromChild('.sections');
  return never;
}

/**
 * Header element
 */
export class HeaderElement extends HTMLElement {
  private readonly created = new Subject<void>();
  private readonly destroyed = new Subject<void>();

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    const templateContent = templateElement.content.cloneNode(true);
    shadowRoot.append(templateContent);

    const fromChild = <ElementType extends Element>(selectors: string) =>
      of(shadowRoot.querySelector<ElementType>(selectors)!);

    const element$ = headerElement({ fromChild });

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

customElements.define('kw-header', HeaderElement);
