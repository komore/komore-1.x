import { type ElementPropertyDefinition } from '@komore/element/compiler/processor';
import { type NodeFactory, type PropertySignature } from 'typescript';
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
  return propertyDefinitions.map(toElementInterfaceProperty(factory));
}

/**
 * Returns a function that returns a property signature, given an element property definition
 * @param factory TypeScript node factory
 * @returns Fucntion that returns a property signature, given an element property definition
 */
function toElementInterfaceProperty(
  factory: NodeFactory
): (propertyDefinition: ElementPropertyDefinition) => PropertySignature {
  return propertyDefinition => {
    const [propertySignature] = createElementInterfaceProperty(factory, propertyDefinition);
    return propertySignature;
  };
}
