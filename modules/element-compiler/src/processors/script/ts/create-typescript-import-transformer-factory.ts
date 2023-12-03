import { type Visitor, type SourceFile, type TransformerFactory } from 'typescript';
import { isImportDeclaration, visitEachChild, visitNode } from 'typescript';

/**
 * Creates a TypeScript transformer for import statements
 * @returns Transformer factory
 */
export function createTypeScriptImportTransformerFactory(): TransformerFactory<SourceFile> {
  return transformationContext => {
    const { factory } = transformationContext;
    const visitor: Visitor = node => {
      if (isImportDeclaration(node)) {
        if (node.importClause?.isTypeOnly) {
          //console.log('type only import ignored', node);
          return factory.createEmptyStatement();
        }

        return node;
      }

      return visitEachChild(node, visitor, transformationContext);
    };

    return node => visitNode(node, visitor);
  };
}
