import {
  NodeFlags,
  type Expression,
  type Identifier,
  type NodeFactory,
  type TypeNode,
  type VariableStatement,
} from 'typescript';

import { isString } from '@komore/string';

/**
 * Creates a variable statement
 *
 * ```ts
 * const name: type = initializer;
 * ```
 *
 * @param factory TypeScript node factory
 * @param name Variable name
 * @param initializer Initializer expression
 * @param type Type
 * @returns Variable statement and identifier
 */
export function createVariableStatement(
  factory: NodeFactory,
  name: string | Identifier,
  initializer: Expression,
  type?: TypeNode
): readonly [variableStatement: VariableStatement, identifier: Identifier] {
  const nameId = isString(name) ? factory.createIdentifier(name) : name;
  const variableDeclaration = factory.createVariableDeclaration(nameId, undefined, type, initializer);
  const variableDeclarationList = factory.createVariableDeclarationList([variableDeclaration], NodeFlags.Const);
  const variableStatement = factory.createVariableStatement(undefined, variableDeclarationList);
  return [variableStatement, nameId];
}
