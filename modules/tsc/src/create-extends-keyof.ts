import {
  type Identifier,
  type NodeFactory,
  type TypeNode,
  type TypeParameterDeclaration,
  type TypeReferenceNode,
} from 'typescript';

import { createKeyof } from './create-keyof';

/**
 * Creates a K extends keyof T parameter declaration
 *
 * ```ts
 * keyName extends keyof type
 * ```
 *
 * @param factory TypeScript node factory
 * @param keyName Key name
 * @param type Extended type
 * @returns Type parameter declaration and type reference node
 */
export function createExtendsKeyof(
  factory: NodeFactory,
  keyName: string | Identifier,
  type: TypeNode
): readonly [typeParameterDeclaration: TypeParameterDeclaration, typeReferenceNode: TypeReferenceNode] {
  const extendsKeyOfType = createKeyof(factory, type);
  const typeParameterDeclaration = factory.createTypeParameterDeclaration(undefined, keyName, extendsKeyOfType);
  const typeReferenceNode = factory.createTypeReferenceNode(typeParameterDeclaration.name);
  return [typeParameterDeclaration, typeReferenceNode];
}
