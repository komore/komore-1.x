import type { ElementAttributeValueType } from '@komore/element/parser';
import type { Expression, TypeReferenceNode } from 'typescript';

/**
 * Element attribute definition
 */
export interface ElementAttributeDefinition {
  readonly attributeName: string;
  readonly attributeValueType: ElementAttributeValueType;
  readonly attributeType: TypeReferenceNode;
  readonly defaultValue: Expression;
  readonly optional: boolean;
}
