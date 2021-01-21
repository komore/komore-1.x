import type { NodeFactory, PropertyAssignment } from 'typescript';
import type { ElementAttributeDefinition } from '../definition/element-attribute-definition';

const factoryFunctionName = '_cEAS';

/**
 * Creates an element attribute subject property assignment
 * ```ts
 * "attribute-name": _cEAS<AttributeType>(optional, initialValue, transform)
 * ```
 * @param factory TypeScript node factory
 * @param attributeDefinition Element attribute definition
 * @returns Shorthand property assignment
 */
export function createElementAttributeSubjectProperty(
  factory: NodeFactory,
  attributeDefinition: ElementAttributeDefinition
): PropertyAssignment {
  const { attributeName, attributeType, defaultValue, optional } = attributeDefinition;
  const createElementAttributeSubject = factory.createIdentifier(factoryFunctionName);
  const typeParameters = [attributeType];
  const optionalParameter = optional ? factory.createTrue() : factory.createFalse();
  const parameters = [optionalParameter, defaultValue, factory.createIdentifier('undefined')];
  const callExpression = factory.createCallExpression(createElementAttributeSubject, typeParameters, parameters);
  const propertyName = factory.createStringLiteral(attributeName);
  return factory.createPropertyAssignment(propertyName, callExpression);
}
