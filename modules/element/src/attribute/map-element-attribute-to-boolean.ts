/**
 * Maps an element attribute value to a boolean
 * Note: an empty string maps to true in order for the presence of an attribute without a value to work
 * @param attributeValue Attribute value
 * @returns Attribute value as a boolean
 */
export function mapElementAttributeToBoolean(attributeValue: string): boolean {
  return attributeValue === '' || attributeValue === 'true';
}
