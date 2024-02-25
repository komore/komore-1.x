import {
  type Expression,
  type Identifier,
  type NodeFactory,
  type ObjectLiteralElementLike,
  type ObjectLiteralExpression,
} from 'typescript';

/**
 * Creates an object literal
 *
 * ```ts
 * {
 *   propertyName: propertyExpression,
 *   propertyWithoutExpression
 * }
 * ```
 *
 * @param factory TypeScript node factory
 * @param properties List of property names and their assigned expressions
 * @returns Object literal expression
 */
export function createObjectLiteral(
  factory: NodeFactory,
  ...properties: ReadonlyArray<
    readonly [propertyName: string | Identifier, propertyExpression?: Expression | undefined] | string | Identifier
  >
): ObjectLiteralExpression {
  const propertyAssignments = properties.map(toPropertyAssignment(factory));
  return factory.createObjectLiteralExpression(propertyAssignments, true);
}

/**
 * Returns a function that creates an object literal element from a property description
 *
 * ```ts
 * propertyName: propertyExpression
 * ```
 *
 * ```ts
 * propertyWithoutExpression
 * ```
 *
 * @param factory TypeScript node factory
 * @returns Function that creates an object literal element from a property description
 */
function toPropertyAssignment(
  factory: NodeFactory
): (
  property:
    | readonly [propertyName: string | Identifier, propertyExpression?: Expression | undefined]
    | string
    | Identifier
) => ObjectLiteralElementLike {
  return property => {
    const [name, initializer] = Array.isArray(property) ? property : [property, undefined];
    return initializer
      ? factory.createPropertyAssignment(name, initializer)
      : factory.createShorthandPropertyAssignment(name);
  };
}
