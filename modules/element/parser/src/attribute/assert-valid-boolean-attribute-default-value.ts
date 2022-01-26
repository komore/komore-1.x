/**
 * Asserts that a default value for a boolean attribute is an actual boolean
 * @param value Value
 */
export function assertValidBooleanAttributeDefaultValue(value: string): void {
  if (!['true', 'false'].includes(value)) {
    throw new Error(`invalid boolean attribute default value "${value}"`);
  }
}
