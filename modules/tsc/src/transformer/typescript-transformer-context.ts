import { type TypeScriptNode } from '../node/typescript-node';
import { type TypeScriptTransformerVisitor } from './typescript-transformer-visitor';

/**
 * TypeScript transformer context
 */
export interface TypeScriptTransformerContext {
  mapChildren<NodeType extends TypeScriptNode>(node: NodeType, visitor: TypeScriptTransformerVisitor): NodeType;
}
