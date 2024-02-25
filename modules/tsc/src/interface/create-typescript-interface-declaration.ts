import { type TypeScriptContext } from '../context/typescript-context';
import { typeScriptContextNodeFactorySymbol } from '../context/typescript-context-node-factory-symbol';
import { type TypeScriptInterfaceDeclaration } from './typescript-interface-declaration';
import { type TypeScriptInterfaceDeclarationParameters } from './typescript-interface-declaration-parameters';

/**
 * Creates a function that creates a TypeScript interface declaration
 *
 * @param context TypeScript context
 * @returns Function that creates a TypeScript interface declaration
 */
export function createTypeScriptInterfaceDeclaration(
  context: TypeScriptContext
): (parameters: TypeScriptInterfaceDeclarationParameters) => TypeScriptInterfaceDeclaration {
  const { [typeScriptContextNodeFactorySymbol]: factory } = context;
  return ({ extends: heritageClauses, members, modifiers, name, typeParameters }) =>
    factory.createInterfaceDeclaration(modifiers, name, typeParameters, heritageClauses, members);
}
