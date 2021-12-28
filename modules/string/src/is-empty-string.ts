/**
 * Returns true if the string is empty, i.e. its length is 0
 * @param str String
 * @returns true if the string is empty
 */
export function isEmptyString(str: string): str is '' {
  return str.length === 0;
}
