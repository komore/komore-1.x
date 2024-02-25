import { NodeFlags } from 'typescript';

import { type TypeScriptContext } from '../context/typescript-context';
import { typeScriptContextNodeFactorySymbol } from '../context/typescript-context-node-factory-symbol';
import { type TypeScriptIdentifier } from '../identifier/typescript-identifier';
import { type TypeScriptVariableStatement } from './typescript-variable-statement';
import { type TypeScriptVariableStatementParameters } from './typescript-variable-statement-parameters';

/**
 * Creates a function that creates a TypeScript variable statement
 *
 * ```ts
 * const name: type = initializer;
 * ```
 *
 * @param context TypeScript context
 * @returns Function that creates a TypeScript variable statement
 */
export function createTypeScriptVariableStatement(
  context: TypeScriptContext
): (
  parameters: TypeScriptVariableStatementParameters
) => readonly [variableStatement: TypeScriptVariableStatement, identifier: TypeScriptIdentifier] {
  const { [typeScriptContextNodeFactorySymbol]: factory } = context;
  return ({ name, initializer, type }) => {
    const nameId = typeof name === 'string' ? factory.createIdentifier(name) : name;
    const variableDeclaration = factory.createVariableDeclaration(nameId, undefined, type, initializer);
    const variableDeclarationList = factory.createVariableDeclarationList([variableDeclaration], NodeFlags.Const);
    const variableStatement = factory.createVariableStatement(undefined, variableDeclarationList);
    return [variableStatement, nameId];
  };
}
