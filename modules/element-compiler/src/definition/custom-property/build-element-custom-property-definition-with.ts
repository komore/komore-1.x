import { type NodeFactory } from 'typescript';
import { type ElementCustomPropertyDefinition } from '../element-custom-property-definition';
import { buildElementCustomPropertyDefinition } from './build-element-custom-property-definition';

/**
 * Creates a function that builds an element custom property definition with a TypeScript node factory
 * @param factory TypeScript node factory
 * @returns Function that builds an element custom property definition
 */
export function buildElementCustomPropertyDefinitionWith(
  factory: NodeFactory
): (propertyDefinition: PropertyDefinition) => ElementCustomPropertyDefinition {
  return propertyDefinition => buildElementCustomPropertyDefinition(factory, propertyDefinition);
}
