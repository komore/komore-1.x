import { type NodeFactory, type PrimaryExpression } from 'typescript';

/**
 * Creates an attribute's default boolean value expression
 * @param factory TypeScript node factory
 * @param attributeValue Attribute value
 * @returns true or false literal
 */
export function createAttributeDefaultBooleanValueExpression(
  factory: NodeFactory,
  attributeValue: string
): PrimaryExpression {
  const booleanValue = attributeValue === 'true' ? true : attributeValue === 'false' ? false : undefined;
  if (booleanValue === undefined) {
    throw new Error(`invalid boolean attribute default value ${attributeValue}`);
  }

  return booleanValue ? factory.createTrue() : factory.createFalse();
}
