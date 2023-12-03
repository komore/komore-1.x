import { type ElementPropertyDefinition } from '@komore/element/compiler/processor';
import { type AccessorDeclaration } from 'typescript';
import { type ElementCompilerContext } from '../element-compiler-context';
import { createElementClassProperty } from './create-element-class-property';

/**
 * Creates an element class' properties
 * @param context Element compiler context
 * @param propertyDefinitions Element property definitions
 * @returns List of accessor declarations
 */
export function createElementClassProperties(
  context: ElementCompilerContext,
  containerName: string,
  propertyDefinitions: ReadonlyArray<ElementPropertyDefinition>
): ReadonlyArray<AccessorDeclaration> {
  return propertyDefinitions.flatMap(toElementClassProperty(context, containerName));
}

/**
 * Creates a function that returns a list of property accessor declarations, given an element property definition
 * @param context Element compiler context
 * @param containerName Container name
 * @returns Function that returns a list of property accessor declarations, given an element property definition
 */
function toElementClassProperty(
  context: ElementCompilerContext,
  containerName: string
): (propertyDefinition: ElementPropertyDefinition) => ReadonlyArray<AccessorDeclaration> {
  return propertyDefinition => createElementClassProperty(context, containerName, propertyDefinition);
}
