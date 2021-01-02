import type { Visitor, SourceFile, TransformerFactory } from 'typescript';
import { isVariableDeclaration, visitEachChild, visitNode } from 'typescript';

/**
 * TypeScript transformer for element properties
 * @param transformationContext Transformation context
 * @returns Transformer
 */
export const typeScriptPropertyTransformerFactory: TransformerFactory<SourceFile> = transformationContext => {
  // const { factory } = transformationContext;
  const visitor: Visitor = node => {

    if (isVariableDeclaration(node)) {
      console.log('variable decl?', node.name.getText());
      console.log('variable decl', node);
    }

    return visitEachChild(node, visitor, transformationContext);
  };

  return sourceNode => visitNode(sourceNode, visitor);
}
