/**
 * Asserts that a default value for a number attribute is an actual number
 * @param value Value
 */
export function assertValidNumberAttributeDefaultValue(value: string): void {
  if (isNaN(Number(value))) {
    throw new Error(`invalid number attribute default value "${value}"`);
  }
}
