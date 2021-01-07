import { SourceFile, TransformerFactory, Visitor, isVariableStatement, SyntaxKind } from 'typescript';
import { /*isVariableDeclaration,*/ visitEachChild } from 'typescript';

/**
 * Creates a TypeScript property transformer for element properties
 * @returns Transformer factory
 */
export function createTypeScriptPropertyTransformerFactory(): TransformerFactory<SourceFile> {
  return transformationContext => {
    // const { factory } = transformationContext;
    const variableStatementVisitor: Visitor = node => {
      if (!isVariableStatement(node) || !node.modifiers?.some(({ kind }) => kind === SyntaxKind.ExportKeyword)) {
        return node;
      }

      console.log('behold export statement', node.getText());

      /*if (isVariableDeclaration(node)) {
        const ancestorNode = 
        if (node.parent.parent)
        console.log('variable decl?', node.name.getText());
        console.log('variable decl', node);
      }*/

      return node;
    };

    return sourceNode => visitEachChild(sourceNode, variableStatementVisitor, transformationContext);
  };
}
