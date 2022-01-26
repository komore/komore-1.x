import { type ElementAttributeValueType } from './element-attribute-value-type';

/**
 * Validates that an attribute value type is either string, number or boolean
 * @param attributeValueType Attribute value type
 */
export function assertValidAttributeValueType(attributeValueType: string): asserts attributeValueType is ElementAttributeValueType {
  if (!['string', 'number', 'boolean'].includes(attributeValueType)) {
    throw new Error(`invalid attribute value type "${attributeValueType}"`);
  }
}
