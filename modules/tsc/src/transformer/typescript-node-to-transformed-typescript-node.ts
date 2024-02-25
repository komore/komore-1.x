import { transform } from 'typescript';

import { type TypeScriptNode } from '../node/typescript-node';
import { type TypeScriptTransformerFactory } from './typescript-transformer-factory';
import { createTypeScriptTransformerContext } from './create-typescript-transformer-context';

export function typeScriptNodeToTransformedTypeScriptNode<NodeType extends TypeScriptNode>(
  transformerFactory: TypeScriptTransformerFactory<NodeType>
): (node: NodeType) => NodeType {
  return node => {
    const result = transform(node, [
      context => {
        const transformerContext = createTypeScriptTransformerContext(context);
        return transformerFactory(transformerContext);
      },
    ]);
    return result.transformed[0] as NodeType;
  };
}
