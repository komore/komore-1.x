import type { TypeParameterDeclaration, TypeReferenceNode } from 'typescript';

/**
 * Event map index
 */
export interface EventMapIndex {
  readonly name: string;
  readonly declaration: TypeParameterDeclaration;
  readonly reference: TypeReferenceNode;
}
