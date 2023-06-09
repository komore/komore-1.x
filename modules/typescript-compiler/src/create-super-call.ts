import { type Expression, type ExpressionStatement, type NodeFactory } from 'typescript';

/**
 * Creates a super() call expression
 * ```ts
 * super(parameters);
 * ```
 * @param factory TypeScript node factory
 * @param parameters Super call parameters
 * @returns Expression statement
 */
export function createSuperCall(factory: NodeFactory, parameters?: ReadonlyArray<Expression>): ExpressionStatement {
  const superCall = factory.createCallExpression(factory.createSuper(), undefined, parameters);
  return factory.createExpressionStatement(superCall);
}
