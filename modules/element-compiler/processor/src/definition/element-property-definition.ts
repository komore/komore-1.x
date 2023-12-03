import { type TypeNode } from 'typescript';

/**
 * Element property definition
 */
export interface ElementPropertyDefinition {
  /**
   * Name of the attribute the property is bound to
   */
  readonly boundAttributeName?: string;
  /**
   * Whether the property is optional
   */
  readonly isOptional: boolean;
  /**
   * Whether the property is read-only
   */
  readonly isReadOnly: boolean;
  /**
   * Property name
   */
  readonly propertyName: string;
  /**
   * Property type
   */
  readonly propertyType: TypeNode;
}
