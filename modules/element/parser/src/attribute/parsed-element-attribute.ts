import type { ElementAttributeValueType } from './element-attribute-value-type';

/**
 * Parsed element attribute
 */
export interface ParsedElementAttribute {
  readonly attributeName: string;
  readonly attributeValueType: ElementAttributeValueType;
  readonly defaultValue?: string;
  readonly optional: boolean;
}
