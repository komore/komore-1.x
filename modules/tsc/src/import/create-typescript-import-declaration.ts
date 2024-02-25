import { type TypeScriptContext } from '../context/typescript-context';
import { typeScriptContextNodeFactorySymbol } from '../context/typescript-context-node-factory-symbol';
import { type TypeScriptImportDeclaration } from './typescript-import-declaration';
import { type TypeScriptImportDeclarationParameters } from './typescript-import-declaration-parameters';
import { typeScriptImportToImportSpecifier } from './typescript-import-to-import-specifier';

/**
 * Creates a function that creates a TypeScript import declaration
 *
 * ```ts
 * import { imports } from moduleSpecifier
 * ```
 *
 * @param context TypeScript context
 * @returns Function that creates a TypeScript import declaration
 */
export function createTypeScriptImportDeclaration(
  context: TypeScriptContext
): (parameters: TypeScriptImportDeclarationParameters) => TypeScriptImportDeclaration {
  const { [typeScriptContextNodeFactorySymbol]: factory } = context;
  const toImportSpecifier = typeScriptImportToImportSpecifier(context);
  return ({ imports, moduleSpecifier }) => {
    const importSpecifiers = imports.map(toImportSpecifier);
    const namedImports = factory.createNamedImports(importSpecifiers);
    const importClause = factory.createImportClause(false, undefined, namedImports);
    const module = typeof moduleSpecifier === 'string' ? factory.createStringLiteral(moduleSpecifier) : moduleSpecifier;
    return factory.createImportDeclaration(undefined, importClause, module, undefined);
  };
}
