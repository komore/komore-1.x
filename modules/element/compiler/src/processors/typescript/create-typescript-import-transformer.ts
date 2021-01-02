import type { Transformer, TransformationContext, Visitor, SourceFile } from 'typescript';
import { isImportDeclaration, visitEachChild, visitNode } from 'typescript';

/**
 * Creates a TypeScript transformer for import statements
 * @param transformationContext Transformation context
 * @returns Transformer
 */
export function createTypeScriptImportTransformer(transformationContext: TransformationContext): Transformer<SourceFile> {
  const { factory } = transformationContext;
  const visitor: Visitor = node => {
    if (isImportDeclaration(node)) {
      if (node.importClause?.isTypeOnly) {
        console.log('type only import ignored', node);
        return factory.createEmptyStatement();
      }

      return node;
    }

    return visitEachChild(node, visitor, transformationContext);
  };

  return node => visitNode(node, visitor);
}
