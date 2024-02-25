import { type TypeScriptContext } from '../context/typescript-context';
import { typeScriptContextNodeFactorySymbol } from '../context/typescript-context-node-factory-symbol';
import { createTypeScriptKeyof } from '../keyof/create-typescript-keyof';
import { type TypeScriptTypeParameterDeclaration } from '../type/typescript-type-parameter-declaration';
import { type TypeScriptTypeReferenceNode } from '../type/typescript-type-reference-node';
import { type TypeScriptExtendsKeyofParameters } from './typescript-extends-keyof-parameters';

/**
 * Creates a function that creates a TypeScript K extends keyof T parameter declaration
 *
 * ```ts
 * keyName extends keyof type
 * ```
 *
 * @param context TypeScript generation context
 * @returns Function that creates a TypeScript K extends keyof T parameter declaration
 */
export function createTypeScriptExtendsKeyof(
  context: TypeScriptContext
): (
  parameters: TypeScriptExtendsKeyofParameters
) => readonly [
  typeParameterDeclaration: TypeScriptTypeParameterDeclaration,
  typeReferenceNode: TypeScriptTypeReferenceNode,
] {
  const { [typeScriptContextNodeFactorySymbol]: factory } = context;
  const keyofType = createTypeScriptKeyof(context);
  return ({ keyName, type }) => {
    const extendsKeyOfType = keyofType(type);
    const typeParameterDeclaration = factory.createTypeParameterDeclaration(undefined, keyName, extendsKeyOfType);
    const typeReferenceNode = factory.createTypeReferenceNode(typeParameterDeclaration.name);
    return [typeParameterDeclaration, typeReferenceNode];
  };
}
