import { type NodeFactory } from 'typescript';

/**
 * Creates an import declaration
 *
 * @param factory TypeScript node factory
 * @param isTypeOnly true for a type import
 * @param names List of names with optional aliases
 */
export function createImportDeclaration<_T extends Record<string, string>>(
  _factory: NodeFactory,
  _isTypeOnly: boolean,
  ..._names: ReadonlyArray<string | [name: string, alias: string]>
) {
  //factory.createImportClause(isTypeOnly, name);
  //factory.createImportDeclaration(undefined);
}
