/**
 * Returns true if the string is blank, i.e. it contains nothing but space characters
 *
 * @param string String
 * @returns true if the string is blank
 */
export function isBlankString(string: string): boolean {
  return string.trim() === '';
}
