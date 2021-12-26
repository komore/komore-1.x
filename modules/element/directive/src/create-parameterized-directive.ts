import { type ParameterizedDirective } from './parameterized-directive';
import { type ParameterizedDirectiveFactory } from './parameterized-directive-factory';

/**
 * Creates a parameterized directive
 * @param directive Parameterized directive
 * @returns Parameterized directive
 * @template ElementType Element type
 * @template ParametersType Parameters type
 */
export function createParameterizedDirective<ElementType extends Element, ParametersType>(
  directive: ParameterizedDirective<ElementType, ParametersType>
): ParameterizedDirectiveFactory<ElementType, ParametersType> {
  return () => directive;
}
