import { type AccessorDeclaration, type NodeFactory } from 'typescript';
import { type ElementPropertyDefinition } from '../definition/element-property-definition';
import { createElementClassProperty } from './create-element-class-property';

/**
 * Creates an element class' properties
 * @param factory TypeScript node factory
 * @param propertyDefinitions Element property definitions
 * @returns List of accessor declarations
 */
export function createElementClassProperties(
  factory: NodeFactory,
  propertyDefinitions: ReadonlyArray<ElementPropertyDefinition>
): ReadonlyArray<AccessorDeclaration> {
  return propertyDefinitions.flatMap(propertyDefinition => createElementClassProperty(factory, propertyDefinition));
}
