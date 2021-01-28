import type { ElementPropertyAttributeBoundDefinition } from './element-property-attribute-bound-definition';
import type { ElementPropertyDefinition } from './element-property-definition';

/**
 * Tests whether an element property is bound to an attribute
 * @param propertyDefinition Element property definition
 * @returns true if the element property is bound to an attribute
 */
export function isElementPropertyAttributeBound(
  propertyDefinition: ElementPropertyDefinition
): propertyDefinition is ElementPropertyAttributeBoundDefinition {
  return propertyDefinition.boundAttributeName !== undefined;
}
