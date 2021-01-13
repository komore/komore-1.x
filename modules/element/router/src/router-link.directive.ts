import { createDirective } from '@komore/element';
import { Observable } from 'rxjs';

/**
 * Router link directive
 */
const routerLinkDirective = createDirective<HTMLElement, Observable<string | URL | RouterLinkOptions>>(element$ => element$.pipe(

));
