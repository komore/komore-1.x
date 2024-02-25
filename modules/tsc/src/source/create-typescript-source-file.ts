import { NodeFlags, SyntaxKind } from 'typescript';

import { type TypeScriptContext } from '../context/typescript-context';
import { typeScriptContextNodeFactorySymbol } from '../context/typescript-context-node-factory-symbol';
import { type TypeScriptSourceFile } from './typescript-source-file';
import { type TypeScriptSourceFileParameters } from './typescript-source-file-parameters';

/**
 * Creates a function that creates a TypeScript source file
 *
 * @param context TypeScript context
 * @returns Function that creates a TypeScript source file
 */
export function createTypeScriptSourceFile(
  context: TypeScriptContext
): (parameters: TypeScriptSourceFileParameters) => TypeScriptSourceFile {
  const { [typeScriptContextNodeFactorySymbol]: factory } = context;
  return ({ statements }) => {
    const eofToken = factory.createToken(SyntaxKind.EndOfFileToken);
    return factory.createSourceFile(statements, eofToken, NodeFlags.None);
  };
}
