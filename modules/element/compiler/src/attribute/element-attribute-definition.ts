import type { Expression, TypeReferenceNode } from 'typescript';

/**
 * Element attribute definition
 */
export interface ElementAttributeDefinition {
  readonly attributeName: string;
  readonly attributeValueType: TypeReferenceNode;
  readonly defaultValue: Expression;
  readonly optional: boolean;
}
