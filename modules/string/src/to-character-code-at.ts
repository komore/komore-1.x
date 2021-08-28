/**
 * Creates a function that returns the character code at a specific position
 * @param position Position
 * @returns Function that returns the character code at `position`
 */
 export function toCharacterCodeAt(position: number): (str: string) => number {
    return str => str.charCodeAt(position);
  }
  