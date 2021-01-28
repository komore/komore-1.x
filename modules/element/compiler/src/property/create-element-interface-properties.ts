import type { NodeFactory, PropertySignature } from 'typescript';
import type { ElementPropertyDefinition } from '../definition/element-property-definition';
import { createElementPropertyDeclaration } from './create-element-property-declaration';

/**
 * Creates an element interface's property signatures
 * @param factory TypeScript node factory
 * @param propertyDefinitions Property definitions
 * @returns List of property signatures
 */
export function createElementInterfaceProperties(
  factory: NodeFactory,
  propertyDefinitions: ReadonlyArray<ElementPropertyDefinition>
): ReadonlyArray<PropertySignature> {
  return propertyDefinitions.map(propertyDefinition => {
    const [propertyDeclaration] = createElementPropertyDeclaration(factory, propertyDefinition);
    return propertyDeclaration;
  });
}
