import type { ClassDeclaration, NodeFactory, SourceFile, Statement } from 'typescript';
import { NodeFlags, SyntaxKind } from 'typescript';

/**
 * Creates an element class source
 * @param factory TypeScript node factory
 * @param elementClass Element class declaration
 * @returns Element class source file
 */
export function createElementClassSource(
  factory: NodeFactory,
  _elementClass: ClassDeclaration
): SourceFile {
  const globalVariableDeclarations = factory.createVariableDeclarationList([], NodeFlags.Const);
  const eofToken = factory.createToken(SyntaxKind.EndOfFileToken);
  const statements: ReadonlyArray<Statement> = [factory.createVariableStatement(undefined, globalVariableDeclarations)];
  return factory.createSourceFile(statements, eofToken, NodeFlags.None);
}
