import type { Directive } from './directive';

/**
 * Directive factory
 * @template ElementType Element type
 * @template ParametersType Parameters type
 */
export interface DirectiveFactory<ElementType extends Element> {
  (): Directive<ElementType>;
}
