import { type ElementPropertyDefinition } from '@komore/element/compiler/processor';
import { createPropertyAccess } from '@komore/typescript/compiler';
import { type AccessorDeclaration, type Identifier } from 'typescript';
import { type ElementCompilerContext } from '../../element-compiler-context';
import { createElementPropertyType } from '../create-element-property-type';

/**
 * Creates an element proprety get accessor
 * ```ts
 * get propertyName(): PropertyType {
 *   return this.containerName.propertyName.value;
 * }
 * ```
 * @param context Element compiler context
 * @param propertyDefinition Element property definition
 * @returns Accessor declaration and identifier
 */
export function createElementPropertyGetAccessor(
  context: ElementCompilerContext,
  containerName: string,
  propertyDefinition: ElementPropertyDefinition
): readonly [accessorDeclaration: AccessorDeclaration, identifier: Identifier] {
  const factory = context.factory;
  const { propertyName } = propertyDefinition;
  const nameId = factory.createIdentifier(propertyName);
  const subjectValue = createPropertyAccess(factory, factory.createThis(), containerName, propertyName, 'value');
  const returnSubjectValue = factory.createReturnStatement(subjectValue);
  const body = factory.createBlock([returnSubjectValue], true);
  const propertyType = createElementPropertyType(factory, propertyDefinition);
  const declaration = factory.createGetAccessorDeclaration(undefined, undefined, nameId, [], propertyType, body);
  return [declaration, nameId];
}
