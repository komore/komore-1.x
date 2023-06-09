import { SyntaxKind, type NodeFactory, type TypeNode, type TypeOperatorNode } from 'typescript';

/**
 * Creates a keyof T type operator
 * ```ts
 * keyof type
 * ```
 * @param factory TypeScript node factory
 * @param type Type
 * @returns Type operator node
 */
export function createKeyof(factory: NodeFactory, type: TypeNode): TypeOperatorNode {
  return factory.createTypeOperatorNode(SyntaxKind.KeyOfKeyword, type);
}
