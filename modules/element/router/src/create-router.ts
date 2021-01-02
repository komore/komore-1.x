import { createDirective } from '@komore/element';
import { Observable } from 'rxjs';

export function createRouter(routes: ($: Observable<unknown>) => Observable<unknown>): DirectiveDefinition {
  createDirective()
}
