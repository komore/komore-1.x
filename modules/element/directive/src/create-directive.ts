import type { Directive } from './directive';
import type { DirectiveFactory } from './directive-factory';
import type { ParameterizedDirective } from './parameterized-directive';
import type { ParameterizedDirectiveFactory } from './parameterized-directive-factory';

/**
 * Creates a directive
 * @param directive Directive
 * @returns Directive
 * @template ElementType Element type
 */
export function createDirective<ElementType extends Element>(
  directive: Directive<ElementType>
): DirectiveFactory<ElementType>;

/**
 * Creates a parameterized directive
 * @param directive Parameterized directive
 * @returns Parameterized directive
 * @template ElementType Element type
 * @template ParametersType Parameters type
 */
export function createDirective<ElementType extends Element, ParametersType>(
  directive: ParameterizedDirective<ElementType, ParametersType>
): ParameterizedDirectiveFactory<ElementType, ParametersType>;

export function createDirective<ElementType extends Element, ParametersType>(
  directive: ParameterizedDirective<ElementType, ParametersType>
): DirectiveFactory<ElementType> | ParameterizedDirectiveFactory<ElementType, ParametersType> {
  return () => directive;
}
