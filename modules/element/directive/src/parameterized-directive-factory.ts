import type { ParameterizedDirective } from './parameterized-directive';

/**
 * Parameterized directive factory
 * @template ElementType Element type
 * @template ParametersType Parameters type
 */
export interface ParameterizedDirectiveFactory<ElementType extends Element, ParametersType> {
  (): ParameterizedDirective<ElementType, ParametersType>;
}
