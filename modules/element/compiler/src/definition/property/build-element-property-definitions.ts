import type { NodeFactory } from 'typescript';
import type { ElementPropertyDefinition } from '../element-property-definition';

/**
 * Builds an element's property definitions
 * @param factory TypeScript node factory
 * @returns List of element property definitions
 */
export function buildElementPropertyDefinitions(
  _factory: NodeFactory
): ReadonlyArray<ElementPropertyDefinition> {
  return [];
}
