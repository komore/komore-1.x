import { type TypeScriptContext } from '../context/typescript-context';
import { typeScriptContextNodeFactorySymbol } from '../context/typescript-context-node-factory-symbol';
import { type TypeScriptIdentifier } from './typescript-identifier';

/**
 * Creates a function that creates a TypeScript identifier
 *
 * @param context TypeScript context
 * @returns Function that creates a TypeScript identifier
 */
export function createTypeScriptIdentifier(context: TypeScriptContext): (name: string) => TypeScriptIdentifier {
  const { [typeScriptContextNodeFactorySymbol]: factory } = context;
  return name => factory.createIdentifier(name);
}
