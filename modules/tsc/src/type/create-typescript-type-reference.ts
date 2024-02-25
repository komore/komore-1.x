import { type TypeScriptContext } from '../context/typescript-context';
import { typeScriptContextNodeFactorySymbol } from '../context/typescript-context-node-factory-symbol';
import { type TypeScriptTypeReferenceNode } from './typescript-type-reference-node';
import { type TypeScriptTypeReferenceParameters } from './typescript-type-reference-parameters';

/**
 * Creates a function that creates a TypeScript type reference
 *
 * @param context TypeScript context
 * @returns Function that creates a TypeScript type reference
 */
export function createTypeScriptTypeReference(
  context: TypeScriptContext
): (parameters: TypeScriptTypeReferenceParameters) => TypeScriptTypeReferenceNode {
  const { [typeScriptContextNodeFactorySymbol]: factory } = context;
  return ({ name, typeArguments }) => factory.createTypeReferenceNode(name, typeArguments);
}
