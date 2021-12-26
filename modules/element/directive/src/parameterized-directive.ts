import { type Observable } from '@komore/reactive';
import { type ParameterizedDirectiveObservables } from './parameterized-directive-observables';

/**
 * Parameterized directive
 * @template ElementType Element type
 * @template ParametersType Parameters type
 */
export interface ParameterizedDirective<ElementType extends Element, ParametersType> {
  (observables: ParameterizedDirectiveObservables<ElementType, ParametersType>): Observable<unknown>;
}
