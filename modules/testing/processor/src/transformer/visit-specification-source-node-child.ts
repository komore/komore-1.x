import { isTypeScriptExpressionStatement, type TypeScriptNode } from '@komore/tsc';

import { isSpecificationFeatureExpression } from '../feature/is-specification-feature-expression';

/**
 * Visits the children of a specification's TypeScript source node, looking for features to transform
 *
 * @param node TypeScript node
 * @returns Transformed TypeScript node
 */
export function visitSpecificationSourceNodeChild(node: TypeScriptNode): TypeScriptNode {
  if (isTypeScriptExpressionStatement(node)) {
    if (isSpecificationFeatureExpression(node)) {
      console.log('feature expression!');

      return;
    }
  }

  return node;
}
