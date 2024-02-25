import { isLabeledStatement } from 'typescript';

import { type TypeScriptLabeledStatement } from './typescript-labeled-statement';
import { type TypeScriptNode } from '../node/typescript-node';

/**
 * Tests whether a TypeScript node is labeled statement
 *
 * @param node TypeScript node
 * @returns true if the TypeScript node is a labeled statement
 */
export function isTypeScriptLabeledStatement(node: TypeScriptNode): node is TypeScriptLabeledStatement {
  return isLabeledStatement(node);
}
