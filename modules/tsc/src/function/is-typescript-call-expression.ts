import { isCallExpression } from 'typescript';

import { type TypeScriptNode } from '../node/typescript-node';
import { type TypeScriptCallExpression } from './typescript-call-expression';

/**
 * Tests whether a TypeScript node is a call expression
 *
 * @param node TypeScript node
 * @returns true if the node is a call expression
 */
export function isTypeScriptCallExpression(node: TypeScriptNode): node is TypeScriptCallExpression {
  return isCallExpression(node);
}
