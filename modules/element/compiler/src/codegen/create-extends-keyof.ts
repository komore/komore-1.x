import type { Identifier, NodeFactory, TypeNode, TypeParameterDeclaration } from 'typescript';
import { SyntaxKind } from 'typescript';

/**
 * Creates a K extends keyof T parameter declaration
 * ```ts
 * keyName extends keyof type
 * ```
 * @param factory TypeScript node factory
 * @param keyName Key name
 * @param type Extended type
 * @returns Type parameter declaration
 */
export function createExtendsKeyof(
  factory: NodeFactory,
  keyName: string | Identifier,
  type: TypeNode
): TypeParameterDeclaration {
  const extendsKeyOfType = factory.createTypeOperatorNode(SyntaxKind.KeyOfKeyword, type);
  return factory.createTypeParameterDeclaration(keyName, extendsKeyOfType);
}
