/**
 * Creates a function that finds the first substring matching the regular expression
 *
 * @param regExp Regular expression
 * @returns Function that returns the index of the first match
 */
export function stringToMatchIndex(regExp: string | RegExp): (string: string) => number {
  return string => string.search(regExp);
}
