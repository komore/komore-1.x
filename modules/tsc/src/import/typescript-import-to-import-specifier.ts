import { type ImportSpecifier } from 'typescript';

import { type TypeScriptContext } from '../context/typescript-context';
import { typeScriptContextNodeFactorySymbol } from '../context/typescript-context-node-factory-symbol';
import { type TypeScriptImport } from './typescript-import';

/**
 * Creates a function that returns an import specifier, given a TypeScript import
 *
 * @param context TypeScript context
 * @returns Function that returns an import specifier, given a TypeScript import
 * @private
 */
export function typeScriptImportToImportSpecifier(
  context: TypeScriptContext
): (typeScriptImport: TypeScriptImport) => ImportSpecifier {
  const { [typeScriptContextNodeFactorySymbol]: factory } = context;
  return ({ alias, name: nameText, type = false }) => {
    const propertyName = alias !== undefined ? factory.createIdentifier(alias) : undefined;
    const name = factory.createIdentifier(nameText);
    return factory.createImportSpecifier(type, propertyName, name);
  };
}
