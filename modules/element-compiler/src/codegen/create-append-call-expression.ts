import { createPropertyAccess } from '@komore/typescript/compiler';
import { type ExpressionStatement, type Identifier, type NodeFactory } from 'typescript';

/**
 * Creates an append call expression
 * ```ts
 * object.append(variable);
 * ```
 * @param factory TypeScript node factory
 * @param objectIdentifier Object identifier
 * @param childIdentifier Child identifier
 * @returns Expression statement
 */
export function createAppendCallExpression(
  factory: NodeFactory,
  objectIdentifier: Identifier,
  childIdentifier: Identifier
): ExpressionStatement {
  const append = createPropertyAccess(factory, objectIdentifier, 'append');
  const appendCall = factory.createCallExpression(append, undefined, [childIdentifier]);
  return factory.createExpressionStatement(appendCall);
}
