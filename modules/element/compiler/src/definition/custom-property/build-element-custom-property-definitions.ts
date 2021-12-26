import { type NodeFactory } from 'typescript';
import { type ElementCustomPropertyDefinition } from '../element-custom-property-definition';
import { buildElementCustomPropertyDefinitionWith } from './build-element-custom-property-definition-with';

/**
 * Builds an element's custom property definitions
 * @param factory TypeScript node factory
 * @returns List of element custom property definitions
 */
export function buildElementCustomPropertyDefinitions(
  factory: NodeFactory,
  propertyDefinitions: ReadonlyArray<PropertyDefinition>
): ReadonlyArray<ElementCustomPropertyDefinition> {
  return propertyDefinitions.map(buildElementCustomPropertyDefinitionWith(factory));
}
