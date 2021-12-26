import { type Observable } from '@komore/reactive';

/**
 * Directive observables
 * @param ElementType Element type
 */
export interface DirectiveObservables<ElementType extends Element> {
  readonly element: Observable<ElementType>;
}
