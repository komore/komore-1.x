import { SyntaxKind, type TypeOperatorNode } from 'typescript';

import { type TypeScriptContext } from '../context/typescript-context';
import { typeScriptContextNodeFactorySymbol } from '../context/typescript-context-node-factory-symbol';
import { type TypeScriptTypeNode } from '../type/typescript-type-node';

/**
 * Creates a function that creates a TypeScript keyof T type operator
 *
 * ```ts
 * keyof type
 * ```
 *
 * @param context TypeScript context
 * @returns Function that creates a TypeScript keyof T type operator
 */
export function createTypeScriptKeyof(context: TypeScriptContext): (type: TypeScriptTypeNode) => TypeOperatorNode {
  const { [typeScriptContextNodeFactorySymbol]: factory } = context;
  return type => factory.createTypeOperatorNode(SyntaxKind.KeyOfKeyword, type);
}
