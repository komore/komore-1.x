import {
  isCallExpression,
  isExpressionStatement,
  Node,
  SourceFile,
  TransformerFactory,
  visitEachChild
} from 'typescript';
import { type FeatureRecorder } from './feature-recorder';

/**
 * Creates a feature recorder transformer factory
 * @param featureRecorder Feature recorder
 * @returns Feature recorder transformer factory
 */
export function createFeatureRecorderTransformerFactory(
  _featureRecorder: FeatureRecorder
): TransformerFactory<SourceFile> {
  return transformationContext => node =>
    visitEachChild(node, visitedNode => visitSourceNodeChild(node, visitedNode), transformationContext);
}

/**
 *
 * @param sourceFile Source file
 * @param node Node
 * @returns
 */
function visitSourceNodeChild(sourceFile: SourceFile, node: Node): Node {
  console.log('fucking node', node);
  if (isExpressionStatement(node)) {
    const expression = node.expression;
    if (isCallExpression(expression)) {
      const calledFunctionName = expression.expression.getText(sourceFile);
      const pos = node.pos;
      const end = node.end;
      console.log(`${pos}-${end}: ${calledFunctionName}`);
      if (calledFunctionName === 'describe') {
      }
      console.log('wee call expression', expression);
    }
  }

  return node;
}
