import { type Directive } from './directive';
import { type DirectiveFactory } from './directive-factory';

/**
 * Creates a directive factory
 * @param factory Factory function
 * @returns Directive factory
 * @template ElementType Element type
 */
export function createDirectiveFactory<ElementType extends Element = Element>(
  factory: () => Directive<ElementType>
): DirectiveFactory<ElementType> {
  return () => factory();
}

// TODO: merge with createParameterizedDirectiveFactory (only the signature changes)
