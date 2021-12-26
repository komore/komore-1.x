import { mock, type MockProxy } from 'jest-mock-extended';
import {
  type EmptyStatement,
  type ImportDeclaration,
  type NodeFactory,
  type SourceFile,
  SyntaxKind,
  type TransformationContext
} from 'typescript';
import { createTypeScriptImportTransformerFactory } from './create-typescript-import-transformer-factory';

describe('Create TypeScript import transformer factory', () => {
  let mockTransformationContext: MockProxy<TransformationContext> & TransformationContext;
  const mockEmptyStatement = mock<EmptyStatement>();

  beforeEach(() => {
    mockTransformationContext = mock<TransformationContext>();
    (mockTransformationContext as any).factory = mock<NodeFactory>();
    mockTransformationContext.factory.createEmptyStatement.mockReturnValueOnce(mockEmptyStatement);
  });

  it('creates a transformer that keeps normal imports', () => {
    given: 'a transformer factory and a transformer';
    const transformerFactory = createTypeScriptImportTransformerFactory();
    const transformer = transformerFactory(mockTransformationContext);
    and: 'an import node';
    const importNode = {
      kind: SyntaxKind.ImportDeclaration
    } as ImportDeclaration as any as SourceFile;
    when: 'transforming the import';
    const transformedNode = transformer(importNode);
    then: 'the node is kept';
    expect(transformedNode).toBe(importNode);
  });

  it('creates a transformer that ignores type imports', () => {
    given: 'a transformer factory and a transformer';
    const transformerFactory = createTypeScriptImportTransformerFactory();
    const transformer = transformerFactory(mockTransformationContext);
    and: 'a type import node';
    const typeImportNode = {
      kind: SyntaxKind.ImportDeclaration,
      importClause: {
        isTypeOnly: true
      }
    } as ImportDeclaration as any as SourceFile;
    when: 'transforming the import';
    const transformedNode = transformer(typeImportNode);
    then: 'the node is replaced with an empty statement';
    expect(transformedNode).toBe(mockEmptyStatement);
    expect(mockTransformationContext.factory.createEmptyStatement).toHaveBeenCalledTimes(1);
  });
});
