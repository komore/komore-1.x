import type { Identifier, NodeFactory, TypeNode, TypeParameterDeclaration, TypeReferenceNode } from 'typescript';
import { SyntaxKind } from 'typescript';

/**
 * Creates a K extends keyof T parameter declaration
 * ```ts
 * keyName extends keyof type
 * ```
 * @param factory TypeScript node factory
 * @param keyName Key name
 * @param type Extended type
 * @returns Type parameter declaration and type reference node
 */
export function createExtendsKeyof(
  factory: NodeFactory,
  keyName: string | Identifier,
  type: TypeNode
): [typeParameterDeclaration: TypeParameterDeclaration, typeReferenceNode: TypeReferenceNode] {
  const extendsKeyOfType = factory.createTypeOperatorNode(SyntaxKind.KeyOfKeyword, type);
  const typeParameterDeclaration = factory.createTypeParameterDeclaration(keyName, extendsKeyOfType);
  const typeReferenceNode = factory.createTypeReferenceNode(typeParameterDeclaration.name);
  return [typeParameterDeclaration, typeReferenceNode];
}
