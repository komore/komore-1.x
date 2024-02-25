import { isExpressionStatement } from 'typescript';

import { type TypeScriptNode } from '../node/typescript-node';
import { type TypeScriptExpressionStatement } from './typescript-expression-statement';

/**
 * Tests whether a TypeScript node is an expression statement
 *
 * @param node TypeScript node
 * @returns true if the node is an expression statement
 */
export function isTypeScriptExpressionStatement(node: TypeScriptNode): node is TypeScriptExpressionStatement {
  return isExpressionStatement(node);
}
