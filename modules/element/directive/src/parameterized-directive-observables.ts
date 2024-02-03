import { type DirectiveObservables } from './directive-observables';

/**
 * Parameterized directive observables
 *
 * @template ElementType Element type
 * @template ParametersType Parameters type
 */
export interface ParameterizedDirectiveObservables<ElementType extends Element, ParametersType>
  extends DirectiveObservables<ElementType> {
  readonly parameters: Observable<ParametersType>;
}
