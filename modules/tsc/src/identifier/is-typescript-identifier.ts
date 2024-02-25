import { isIdentifier } from 'typescript';

import { type TypeScriptNode } from '../node/typescript-node';
import { type TypeScriptIdentifier } from './typescript-identifier';

export function isTypeScriptIdentifier(node: TypeScriptNode): node is TypeScriptIdentifier {
  return isIdentifier(node);
}
