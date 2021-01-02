import { defineElement } from '@komore/element';
import { createRouter } from '@komore/element/router';
import '@komore/website/layout/footer';
import '@komore/website/layout/header';
import '@komore/website/layout/navigation';

/**
 * Website root element
 */
export const WebsiteRootElement = defineElement({
  name: 'website-root',
  properties: props<>(),
  styles: ({ css }) => css`
    @property --header-height {
      syntax: '<length>';
      inherits: false;
      initial-value: 64px;
    }

    @property --footer-height {
      syntax: '<length>';
      inherits: false;
      initial-value: 232px;
    }

    @property --navigation-width {
      syntax: '<length>';
      inherits: false;
      initial-value: 260px;
    }

    :host {

    }

    komore-header {
      position: fixed;
      top: 0px;
      left: 0px;
      right: 0px;
      height: var(--header-height);
    }

    komore-navigation {
      position: fixed;
      top: var(--header-height);
      left: 0px;
      width: var(--navigation-width);
      bottom: 0px;
      transition: transform 0.25s ease-in;
      transform: translate(0px, 0px);
      box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.0625);
  
      /*&:not(:hover) {
        transform: translate(calc(0 - var(--navigation-width)), 0px);
      }*/
    }

    main {
      margin-top: var(--header-height);
      margin-left: var(--navigation-width);
      height: calc(100vh - var(--header-height));
      overflow-y: auto;
    }
  
    main::-webkit-scrollbar {
      height: 4px;
      width: 4px;
    }
  
    main::-webkit-scrollbar-track {
      background: transparent;
    }
  
    main::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.375);
    }
  
    main::ng-deep router-outlet + *:not(komore-footer) {
      min-height: calc(100vh - var(--header-height) - var(--footer-height));
    }
  
    komore-footer {
      height: var(--footer-height);
      max-height: var(--footer-height);
    }
  `,
  template: ({ html }) => html`
    <layout-header>
    </layout-header>
    <layout-navigation [navigationItems]="navigationItems$ | async">
    </layout-navigation>
    <main *${
      createRouter($ => $.pipe())
    }>
    </main>
    <komore-footer></komore-footer>
  `
});
