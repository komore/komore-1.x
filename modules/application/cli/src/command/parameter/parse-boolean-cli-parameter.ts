/**
 * Parses a boolean CLI parameter
 * @param value Value
 * @returns Boolean value
 */
export function parseBooleanCliParameter(value: string): boolean {
  const normalizedValue = value.toLocaleLowerCase();
  if (['true', 'yes'].includes(normalizedValue)) {
    return true;
  }

  if (['false', 'no'].includes(normalizedValue)) {
    return false;
  }

  throw new Error(`invalid boolean value "${value}"`);
}
