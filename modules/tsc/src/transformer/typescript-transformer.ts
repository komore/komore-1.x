import { type TypeScriptNode } from '../node/typescript-node';

/**
 * TypeScript transformer
 *
 * @template NodeType Node type
 */
export interface TypeScriptTransformer<NodeType extends TypeScriptNode> {
  (node: NodeType): NodeType;
}
