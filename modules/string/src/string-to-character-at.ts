/**
 * Creates a function that returns the character at a specific position, given a string
 *
 * @param position Position
 * @returns Function that returns the character at `position`, or an empty string if `position` is out of range
 */
export function stringToCharacterAt(position: number): (string: string) => string {
  return string => string.charAt(position);
}
