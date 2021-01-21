import type { ElementAttributeValueType, ParsedElementAttribute } from '@komore/element/parser';
import type { Expression, NodeFactory, NumericLiteral, PrimaryExpression } from 'typescript';
import type { ElementAttributeDefinition } from './element-attribute-definition';

/**
 * Builds an element attribute definition
 * @param factory TypeScript node factory
 * @param parsedElementAttribute Parsed element attribute
 * @returns Element attribute definition
 */
export function buildElementAttributeDefinition(
  factory: NodeFactory,
  parsedElementAttribute: ParsedElementAttribute
): ElementAttributeDefinition {
  const { attributeValueType, defaultValue: defaultValueString } = parsedElementAttribute;
  const attributeType = factory.createTypeReferenceNode(attributeValueType);
  const defaultValue = createDefaultValueExpression(factory, attributeValueType, defaultValueString);

  return {
    ...parsedElementAttribute,
    attributeType,
    defaultValue
  };
}

/**
 * Creates a default value expression
 * @param factory TypeScript node factory
 * @param attributeType Attribute type
 * @param attributeDefaultValue Attribute default value
 * @returns Default value expression
 */
function createDefaultValueExpression(
  factory: NodeFactory,
  attributeValueType: ElementAttributeValueType,
  defaultValueString?: string
): Expression {
  if (defaultValueString === undefined) {
    return factory.createIdentifier('undefined');
  }

  switch (attributeValueType) {
    case 'string':
      return factory.createStringLiteral(defaultValueString, true);
    case 'number':
      return createNumberDefaultValueExpression(factory, defaultValueString);
    case 'boolean':
      return createBooleanDefaultValueExpression(factory, defaultValueString);
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
