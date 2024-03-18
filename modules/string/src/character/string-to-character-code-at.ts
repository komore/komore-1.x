/**
 * Creates a function that returns the character code at a specific position
 *
 * @param position Position
 * @returns Function that returns the character code at `position`
 */
export function stringToCharacterCodeAt(position: number): (string: string) => number {
  return string => string.charCodeAt(position);
}
