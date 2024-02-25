import { type TypeScriptNode } from '../node/typescript-node';
import { type TypeScriptTransformer } from './typescript-transformer';
import { type TypeScriptTransformerContext } from './typescript-transformer-context';

/**
 * TypeScript transformer factory
 *
 * @template NodeType Node type
 */
export interface TypeScriptTransformerFactory<NodeType extends TypeScriptNode> {
  (transformerContext: TypeScriptTransformerContext): TypeScriptTransformer<NodeType>;
}
