import { Observable } from 'rxjs';
import type { Directive } from './directive';
import { ParameterizedDirectiveObservables } from './parameterized-directive-observables';

/**
 * Parameterized directive
 * @template ElementType Element type
 * @template ParametersType Parameters type
 */
export interface ParameterizedDirective<ElementType extends Element, ParametersType> {
  (observables: ParameterizedDirectiveObservables<ElementType, ParametersType>): Observable<any>;
}
