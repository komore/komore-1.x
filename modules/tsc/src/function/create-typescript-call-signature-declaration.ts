import { type TypeScriptContext } from '../context/typescript-context';
import { typeScriptContextNodeFactorySymbol } from '../context/typescript-context-node-factory-symbol';
import { type TypeScriptCallSignatureDeclaration } from './typescript-call-signature-declaration';
import { type TypeScriptCallSignatureDeclarationParameters } from './typescript-call-signature-declaration-parameters';

/**
 * Creates a function that creates a TypeScript call signature declaration
 *
 * @param context TypeScript context
 * @returns Function that creates a TypeScript call signature declaration
 */
export function createTypeScriptCallSignatureDeclaration(
  context: TypeScriptContext
): (parameters: TypeScriptCallSignatureDeclarationParameters) => TypeScriptCallSignatureDeclaration {
  const { [typeScriptContextNodeFactorySymbol]: factory } = context;
  return ({ parameters, returnType, typeParameters }) => {
    return factory.createCallSignature(typeParameters, parameters, returnType);
  };
}
