import type { ClassDeclaration, NodeFactory, SourceFile, Statement } from 'typescript';
import { NodeFlags, SyntaxKind } from 'typescript';

/**
 * Creates an element class source
 * @param factory TypeScript node factory
 * @param classDeclaration Element class declaration
 * @returns Element class source file
 */
export function createElementClassSource(factory: NodeFactory, classDeclaration: ClassDeclaration): SourceFile {
  const globalVariableDeclarations = factory.createVariableDeclarationList([], NodeFlags.Const);
  const eofToken = factory.createToken(SyntaxKind.EndOfFileToken);
  const statements: ReadonlyArray<Statement> = [
    classDeclaration,
    factory.createVariableStatement(undefined, globalVariableDeclarations)
  ];
  return factory.createSourceFile(statements, eofToken, NodeFlags.None);
}
