import type { ParameterizedDirective } from './parameterized-directive';
import type { ParameterizedDirectiveFactory } from './parameterized-directive-factory';

/**
 * Creates a parameterized directive factory
 * @param factory Parameterized factory function
 * @returns Parameterized directive factory
 * @template ElementType Element type
 * @template ParametersType Parameters type
 */
export function createParameterizedDirectiveFactory<ElementType extends Element, ParametersType>(
  factory: () => ParameterizedDirective<ElementType, ParametersType>
): ParameterizedDirectiveFactory<ElementType, ParametersType> {
  return () => factory();
}
