import { createDirective } from '@komore/element';
import type { Observable } from '@komore/reactive';

export function createRouter(routes: ($: Observable<unknown>) => Observable<unknown>): DirectiveDefinition {
  createDirective()
}
