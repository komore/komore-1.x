import { type Expression, type NodeFactory, type PropertyAccessExpression } from 'typescript';

import { isString } from '@komore/string';

/**
 * Creates a property access
 *
 * ```ts
 * expression.propertyName.x.y.z
 * ```
 *
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
  const baseExpression = isString(expression) ? factory.createIdentifier(expression) : expression;
  const firstPropertyAccess = factory.createPropertyAccessExpression(baseExpression, propertyName);
  return additionalPropertyNames.reduce(propertyNamesToPropertyAccess(factory), firstPropertyAccess);
}

function propertyNamesToPropertyAccess(
  factory: NodeFactory
): (propertyAccess: PropertyAccessExpression, propertyName: string) => PropertyAccessExpression {
  return (propertyAccess, propertyName) => {
    const propertyId = factory.createIdentifier(propertyName);
    return factory.createPropertyAccessExpression(propertyAccess, propertyId);
  };
}
