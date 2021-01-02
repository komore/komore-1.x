import {
  isLabeledStatement,
  SourceFile,
  Transformer,
  TransformationContext,
  visitEachChild,
  visitNode,
  Visitor
} from 'typescript';

/**
 * Creates a TypeScript transformer for labeled statements
 * @param transformationContext Transformation context
 * @returns Transformer
 */
export function createTypeScriptLabeledTransformer(
  transformationContext: TransformationContext
): Transformer<SourceFile> {
  //const { factory } = transformationContext;
  const visitor: Visitor = node => {
    if (isLabeledStatement(node)) {
      if (node.label) {
        console.log('weee label', node.label, node);
      }
    }

    return visitEachChild(node, visitor, transformationContext);
  };

  return node => visitNode(node, visitor);
}
