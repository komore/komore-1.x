import { createDirective } from '@komore/element/directive';

/**
 * Router link directive
 */
const routerLinkDirective = createDirective<HTMLElement, Observable<string | URL | RouterLinkOptions>>(element$ =>
  element$.pipe()
);
