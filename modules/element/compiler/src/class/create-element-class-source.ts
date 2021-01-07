import { NodeFactory, SourceFile, Statement, VariableDeclaration } from 'typescript';
import { NodeFlags, SyntaxKind } from 'typescript';

/**
 * Creates an element class source
 * @param factory TypeScript node factory
 * @param attributeNames Attribute names variable declaration
 * @returns Element class source file
 */
export function createElementClassSource(factory: NodeFactory, attributeNames: VariableDeclaration): SourceFile {
  const globalVariableDeclarations = factory.createVariableDeclarationList([attributeNames], NodeFlags.Const);
  const eofToken = factory.createToken(SyntaxKind.EndOfFileToken);
  const statements: ReadonlyArray<Statement> = [factory.createVariableStatement(undefined, globalVariableDeclarations)];
  return factory.createSourceFile(statements, eofToken, NodeFlags.None);
}
