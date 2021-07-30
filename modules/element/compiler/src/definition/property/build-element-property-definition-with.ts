import type { NodeFactory } from 'typescript';
import type { ElementPropertyDefinition } from '../element-property-definition';
import { buildElementPropertyDefinition } from './build-element-property-definition';

/**
 * Creates a function that builds an element property definition with a TypeScript node factory
 * @param factory TypeScript node factory
 * @returns Function that builds an element property definition
 */
export function buildElementPropertyDefinitionWith(factory: NodeFactory): () => ElementPropertyDefinition {
  return () => buildElementPropertyDefinition(factory);
}
