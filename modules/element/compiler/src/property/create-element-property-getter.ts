import type { GetAccessorDeclaration, NodeFactory } from 'typescript';
import { createPropertyAccess } from '../codegen/create-property-access';
import type { ElementPropertyDefinition } from '../definition/element-property-definition';

/**
 * Creates an element proprety getter
 * @param factory TypeScript node factory
 * @param propertyDefinition Element property definition
 */
export function createElementPropertyGetter(
  factory: NodeFactory,
  propertyDefinition: ElementPropertyDefinition
): GetAccessorDeclaration {
  const { propertyName } = propertyDefinition;
  const propertyNameId = factory.createIdentifier(propertyName);
  const subjectValue = createPropertyAccess(factory, factory.createThis(), '_kp', propertyName, 's', 'value');
  const returnSubjectValue = factory.createReturnStatement(subjectValue);
  const body = factory.createBlock([returnSubjectValue], true);
  return factory.createGetAccessorDeclaration(undefined, undefined, propertyNameId, [], undefined, body);
}
