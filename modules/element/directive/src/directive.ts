import { Observable } from 'rxjs';
import { DirectiveObservables } from './directive-observables';

/**
 * Directive
 * @template ElementType Element type
 */
export interface Directive<ElementType extends Element> {
  (observables: DirectiveObservables<ElementType>): Observable<any>;
}
