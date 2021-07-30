import type { NodeFactory } from 'typescript';
import type { ElementCustomPropertyDefinition } from '../element-custom-property-definition';

/**
 * Builds an element custom property definition
 * @param factory TypeScript node factory
 * @param propertyDefinition Property definition
 * @returns Element custom property definition
 */
export function buildElementCustomPropertyDefinition(
  _factory: NodeFactory,
  propertyDefinition: PropertyDefinition
): ElementCustomPropertyDefinition {
  return {
    propertyDefinition
  };
}
