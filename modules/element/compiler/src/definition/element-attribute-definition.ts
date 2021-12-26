import { type ElementAttributeValueType } from '@komore/element/parser';
import { type Expression, type TypeNode } from 'typescript';

/**
 * Element attribute definition
 */
export interface ElementAttributeDefinition {
  readonly attributeName: string;
  readonly attributeValueType: ElementAttributeValueType;
  readonly attributeType: TypeNode;
  readonly defaultValue: Expression;
  readonly optional: boolean;
}
