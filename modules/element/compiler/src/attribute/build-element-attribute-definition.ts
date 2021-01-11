import type {
  Expression,
  Identifier,
  NodeFactory,
  NumericLiteral,
  PrimaryExpression,
  PropertyAccessExpression,
  TypeReferenceNode
} from 'typescript';
import type { ElementAttributeDefinition } from './element-attribute-definition';

/**
 * Attribute name specification regular expression
 * - attribute-name
 * - optional ? symbol
 * - optional :-prefixed type
 */
const attributeNameSpecificationRegExp = /([^\?:]+)(\??)(:.*)?/;

/**
 * Builds an element attribute definition
 * @param factory TypeScript node factory
 * @param attributeNameSpecification Attribute name specification
 * @param attributeValueSpecification Attribute value specification
 * @returns Element attribute definition
 */
export function buildElementAttributeDefinition(
  factory: NodeFactory,
  attributeNameSpecification: string,
  attributeValueSpecification?: string
): ElementAttributeDefinition {
  const attributeNameMatches = attributeNameSpecification.match(attributeNameSpecificationRegExp);
  if (attributeNameMatches === null) {
    throw new Error(`invalid attribute name specification ${attributeNameSpecification}`);
  }

  const attributeName = attributeNameMatches[1];
  const optional = attributeNameMatches[2] === '?';
  const attributeValueTypeName = attributeNameMatches[3]?.substr(1) ?? 'string';
  const attributeValueType = factory.createTypeReferenceNode(attributeValueTypeName);
  const defaultValue = createDefaultValueExpression(factory, attributeValueType, attributeValueSpecification);

  return {
    attributeName,
    attributeValueType,
    defaultValue,
    optional
  };
}

/**
 * Creates a default value expression
 * @param factory TypeScript node factory
 * @param attributeValueType Attribute value type
 * @param attributeValue Attribute value
 * @returns Default value expression
 */
function createDefaultValueExpression(
  factory: NodeFactory,
  attributeValueType: TypeReferenceNode,
  attributeValue?: string
): Expression {
  if (attributeValue === undefined) {
    return factory.createIdentifier('undefined');
  }

  const attributeValueTypeNameIdentifier = attributeValueType.typeName as Identifier;
  const attributeValueTypeName = attributeValueTypeNameIdentifier.text;
  switch (attributeValueTypeName.toLocaleLowerCase()) {
    case 'string':
      return factory.createStringLiteral(attributeValue, true);
    case 'number':
      return createNumberDefaultValueExpression(factory, attributeValue);
    case 'boolean':
      return createBooleanDefaultValueExpression(factory, attributeValue);
    default:
      return createEnumDefaultValueExpression(factory, attributeValueTypeName, attributeValue);
  }
}

/**
 * Creates a number default value expression
 * @param factory TypeScript node factory
 * @param attributeValue Attribute value
 * @returns Numric literal
 */
function createNumberDefaultValueExpression(factory: NodeFactory, attributeValue: string): NumericLiteral {
  const numberValue = parseFloat(attributeValue);
  if (isNaN(numberValue)) {
    throw new Error(`invalid number attribute default value ${attributeValue}`);
  }

  return factory.createNumericLiteral(numberValue);
}

/**
 * Creates a boolean default value expression
 * @param factory TypeScript node factory
 * @param attributeValue Attribute value
 * @returns true or false literal
 */
function createBooleanDefaultValueExpression(factory: NodeFactory, attributeValue: string): PrimaryExpression {
  const booleanValue = attributeValue === 'true' ? true : attributeValue === 'false' ? false : undefined;
  if (booleanValue === undefined) {
    throw new Error(`invalid boolean attribute default value ${attributeValue}`);
  }

  return booleanValue ? factory.createTrue() : factory.createFalse();
}

/**
 * Creates an enum default value expression
 * @param factory TypeScript node factory
 * @param attributeValueTypeName Attribute value type name
 * @param attributeValue Attribute value
 * @returns Property access expression
 */
function createEnumDefaultValueExpression(
  factory: NodeFactory,
  attributeValueTypeName: string,
  attributeValue: string
): PropertyAccessExpression {
  return factory.createPropertyAccessExpression(factory.createIdentifier(attributeValueTypeName), attributeValue);
}
