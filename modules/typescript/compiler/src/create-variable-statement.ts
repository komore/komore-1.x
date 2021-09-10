import type { Expression, Identifier, NodeFactory, VariableStatement } from 'typescript';
import { NodeFlags } from 'typescript';

/**
 * Creates a variable statement
 * ```ts
 * const name = initializer;
 * ```
 * @param factory TypeScript node factory
 * @param name Variable name
 * @param initializer Initializer expression
 * @returns Variable statement and identifier
 */
export function createVariableStatement(
  factory: NodeFactory,
  name: string | Identifier,
  initializer: Expression
): [VariableStatement, Identifier] {
  const nameId = typeof name === 'string' ? factory.createIdentifier(name) : name;
  const variableDeclaration = factory.createVariableDeclaration(nameId, undefined, undefined, initializer);
  const variableDeclarationList = factory.createVariableDeclarationList([variableDeclaration], NodeFlags.Const);
  const variableStatement = factory.createVariableStatement(undefined, variableDeclarationList);
  return [variableStatement, nameId];
}
