/**
 * Creates a function that tests whether a string starts with a specific substring starting at a specific position
 * @param searchString Search string
 * @param startPosition Start position
 * @returns Function that returns true if the passed string starts with `searchString` at position `startPosition`
 */
export function stringStartsWith(searchString: string, startPosition = 0): (str: string) => boolean {
  return str => str.startsWith(searchString, startPosition);
}
