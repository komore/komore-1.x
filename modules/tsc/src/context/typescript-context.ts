import { type NodeFactory } from 'typescript';

import { type typeScriptContextNodeFactorySymbol } from './typescript-context-node-factory-symbol';

/**
 * TypeScript context
 */
export interface TypeScriptContext {
  readonly [typeScriptContextNodeFactorySymbol]: NodeFactory;
}
