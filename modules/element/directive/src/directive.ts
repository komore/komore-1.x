import type { Observable } from 'rxjs';
import type { DirectiveObservables } from './directive-observables';

/**
 * Directive
 * @template ElementType Element type
 */
export interface Directive<ElementType extends Element> {
  (observables: DirectiveObservables<ElementType>): Observable<unknown>;
}
