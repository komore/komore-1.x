import { type TypeScriptNode } from '../node/typescript-node';

/**
 * TypeScript transformer visitor
 *
 * @template InputNodeType Input TypeScript node type
 * @template OutputNodeType Output TypeScript node type
 */
export interface TypeScriptTransformerVisitor<
  InputNodeType extends TypeScriptNode = TypeScriptNode,
  OutputNodeType extends TypeScriptNode | undefined = TypeScriptNode | undefined,
> {
  (node: InputNodeType): OutputNodeType | ReadonlyArray<NonNullable<OutputNodeType>>;
}
