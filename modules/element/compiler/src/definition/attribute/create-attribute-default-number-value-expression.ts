import { type NodeFactory, type NumericLiteral } from 'typescript';

/**
 * Creates an attribute's default number value expression
 * @param factory TypeScript node factory
 * @param attributeValue Attribute value
 * @returns Numric literal
 */
export function createAttributeDefaultNumberValueExpression(
  factory: NodeFactory,
  attributeValue: string
): NumericLiteral {
  const numberValue = parseFloat(attributeValue);
  if (isNaN(numberValue)) {
    throw new Error(`invalid number attribute default value ${attributeValue}`);
  }

  return factory.createNumericLiteral(numberValue);
}
