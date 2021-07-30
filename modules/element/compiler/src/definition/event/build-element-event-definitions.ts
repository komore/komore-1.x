import type { NodeFactory } from 'typescript';
import type { ElementEventDefinition } from '../element-event-definition';

/**
 * Builds an element's event definitions
 * @param factory TypeScript node factory
 * @returns List of element event definitions
 */
export function buildElementEventDefinitions(
  _factory: NodeFactory
): ReadonlyArray<ElementEventDefinition> {
  return [];
}
