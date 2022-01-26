import { createDirective } from '@komore/element/directive';
import { type Observable } from '@komore/reactive';

/**
 * Router link directive
 */
const routerLinkDirective = createDirective<HTMLElement, Observable<string | URL | RouterLinkOptions>>(element$ => element$.pipe(

));
