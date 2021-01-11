import type { NodeFactory, PropertyAssignment } from 'typescript';
import type { ElementAttributeDefinition } from './element-attribute-definition';

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
  const { attributeName, attributeValueType, defaultValue, optional } = attributeDefinition;
  const createElementAttributeSubject = factory.createIdentifier(factoryFunctionName);
  const typeParameters = [attributeValueType];
  const optionalParameter = optional ? factory.createTrue() : factory.createFalse();
  const parameters = [optionalParameter, defaultValue, factory.createIdentifier('undefined')];
  const callExpression = factory.createCallExpression(createElementAttributeSubject, typeParameters, parameters);
  const propertyName = factory.createStringLiteral(attributeName);
  return factory.createPropertyAssignment(propertyName, callExpression);
}
