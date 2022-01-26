import { type ElementPropertyDefinition } from '@komore/element/compiler/processor';
import { type AccessorDeclaration } from 'typescript';
import { type ElementCompilerContext } from '../element-compiler-context';
import { createElementPropertyGetAccessor } from './get-accessor/create-element-property-get-accessor';
import { createElementPropertySetAccessor } from './set-accessor/create-element-property-set-accessor';

/**
 * Creates an element property for a class
 * ```ts
 * get propertyName(): propertyType { }
 * set propertyName(value: propertyType) { }
 * ```
 * @param context Element compiler context
 * @param propertyDefinition Element property definition
 * @returns List of accessor declarations
 */
export function createElementClassProperty(
  context: ElementCompilerContext,
  containerName: string,
  propertyDefinition: ElementPropertyDefinition
): ReadonlyArray<AccessorDeclaration> {
  const [getAccessor] = createElementPropertyGetAccessor(context, containerName, propertyDefinition);
  const declarations: Array<AccessorDeclaration> = [getAccessor];

  if (!propertyDefinition.isReadOnly) {
    const [setAccessor] = createElementPropertySetAccessor(context, containerName, propertyDefinition);
    declarations.push(setAccessor);
  }

  return declarations;
}
