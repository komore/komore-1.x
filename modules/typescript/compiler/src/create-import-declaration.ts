import type { NodeFactory } from 'typescript';

export function createImportDeclaration<T extends Record<string, string>>(factory: NodeFactory, isTypeOnly: boolean, names) {
  factory.createImportClause(isTypeOnly, )
  factory.createImportDeclaration(undefined, )
}