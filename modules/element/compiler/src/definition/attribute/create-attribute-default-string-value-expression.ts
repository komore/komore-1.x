import type { NodeFactory, StringLiteral } from 'typescript';

/**
 * Creates an attribute's default boolean value expression
 * @param factory TypeScript node factory
 * @param attributeValue Attribute value
 * @returns true or false literal
 */
export function createAttributeDefaultStringValueExpression(
  factory: NodeFactory,
  attributeValue: string
): StringLiteral {
  return factory.createStringLiteral(attributeValue);
}
