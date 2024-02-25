import { visitEachChild, type TransformationContext } from 'typescript';

import { type TypeScriptTransformerContext } from './typescript-transformer-context';

/**
 * Creates a TypeScript transformer context
 *
 * @param transformationContext Transformation context
 * @returns TypeScript transformer context
 */
export function createTypeScriptTransformerContext(
  transformationContext: Readonly<TransformationContext>
): TypeScriptTransformerContext {
  return {
    mapChildren: (node, visitor) => visitEachChild(node, visitor, transformationContext)
  };
}
