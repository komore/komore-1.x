/**
 * Creates a function that returns the character at a specific position
 * @param position Position
 * @returns Function that returns the character at `position`
 */
export function toCharacterAt(position: number): (str: string) => string {
  return str => str.charAt(position);
}
