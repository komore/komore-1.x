import { type NodeFactory, type PropertySignature } from 'typescript';
import { type ElementPropertyDefinition } from '../definition/element-property-definition';
import { createElementInterfaceProperty } from './create-element-interface-property';

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
    const [propertySignature] = createElementInterfaceProperty(factory, propertyDefinition);
    return propertySignature;
  });
}
