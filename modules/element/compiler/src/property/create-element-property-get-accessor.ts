import { createPropertyAccess } from '@komore/typescript/compiler';
import type { GetAccessorDeclaration, Identifier, NodeFactory } from 'typescript';
import type { ElementPropertyDefinition } from '../definition/element-property-definition';
import { createElementPropertyType } from './create-element-property-type';

/**
 * Creates an element proprety get accessor
 * ```ts
 * get propertyName(): PropertyType {
 *   return this._kp.propertyName.s.value;
 * }
 * ```
 * @param factory TypeScript node factory
 * @param propertyDefinition Element property definition
 * @returns Get accessor declaration and identifier
 */
export function createElementPropertyGetAccessor(
  factory: NodeFactory,
  propertyDefinition: ElementPropertyDefinition
): [GetAccessorDeclaration, Identifier] {
  const { propertyName } = propertyDefinition;
  const nameId = factory.createIdentifier(propertyName);
  const subjectValue = createPropertyAccess(factory, factory.createThis(), '_kp', propertyName, 's', 'value');
  const returnSubjectValue = factory.createReturnStatement(subjectValue);
  const body = factory.createBlock([returnSubjectValue], true);
  const propertyType = createElementPropertyType(factory, propertyDefinition);
  const declaration = factory.createGetAccessorDeclaration(undefined, undefined, nameId, [], propertyType, body);
  return [declaration, nameId];
}
