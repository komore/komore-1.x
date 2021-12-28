/**
 * Creates a function that tests whether a string ends with a specific substring starting at a specific position
 * @param searchString Search string
 * @param length Optional length of the search string to take into account
 * @returns Function that returns true if the passed string - optionally truncated to `length` characters - ends with `searchString`
 */
export function stringEndsWith(searchString: string, length?: number): (str: string) => boolean {
  return str => str.endsWith(searchString, length);
}
