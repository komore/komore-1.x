import type { Expression, NodeFactory, PropertyAccessExpression } from 'typescript';

/**
 * Creates a property access
 * ```ts
 * expression.propertyName.x.y.z
 * ```
 * @param factory TypeScript node factory
 * @param expression Expression
 * @param propertyName Property name
 * @param additionalPropertyNames Additional property names
 * @returns Property access expression
 */
export function createPropertyAccess(
  factory: NodeFactory,
  expression: string | Expression,
  propertyName: string,
  ...additionalPropertyNames: ReadonlyArray<string>
): PropertyAccessExpression {
  const baseExpression = typeof expression === 'string' ? factory.createIdentifier(expression) : expression;
  let propertyAccess = factory.createPropertyAccessExpression(baseExpression, propertyName);

  for (const additionalPropertyName of additionalPropertyNames) {
    const propertyId = factory.createIdentifier(additionalPropertyName);
    propertyAccess = factory.createPropertyAccessExpression(propertyAccess, propertyId);
  }

  return propertyAccess;
}
