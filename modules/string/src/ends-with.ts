/**
 * Creates a function that tests whether a string ends with a specific substring starting at a specific position
 * @param searchString Search string
 * @returns Function that returns true if the passed string ends with `searchString`
 */
export function endsWith(searchString: string): (str: string) => boolean;

/**
 * Creates a function that tests whether a string ends with a specific substring, taking only a portion of the string
 * into account
 * @param searchString Search string
 * @param length Length of the search string to take into account
 * @returns Function that returns true if the passed string truncated to `length` characters ends with `searchString`
 */
export function endsWith(searchString: string, length: number): (str: string) => boolean;

export function endsWith(searchString: string, length?: number): (str: string) => boolean {
  return str => str.endsWith(searchString, length);
}
