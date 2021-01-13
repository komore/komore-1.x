import type { Observable } from 'rxjs';

/**
 * Directive observables
 * @param ElementType Element type
 */
export interface DirectiveObservables<ElementType extends Element> {
  readonly element: Observable<ElementType>;
}
