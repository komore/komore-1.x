import { factory } from 'typescript';

import { type TypeScriptContext } from './typescript-context';
import { typeScriptContextNodeFactorySymbol } from './typescript-context-node-factory-symbol';

/**
 * Creates a TypeScript context
 *
 * @param contextOptions TypeScript context options
 * @returns TypeScript context
 */
export function createTypeScriptContext(_contextOptions: unknown): TypeScriptContext {
  return {
    [typeScriptContextNodeFactorySymbol]: factory,
  };
}
