import { type TypeNode } from 'typescript';

/**
 * Element property definition
 */
export interface ElementPropertyDefinition {
  readonly propertyName: string;
  readonly propertyType: TypeNode;
  readonly isOptional: boolean;
  readonly isReadOnly: boolean;
  readonly boundAttributeName?: string;
}
