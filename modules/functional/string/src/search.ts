/**
 * Creates a function that finds the first substring matching the regular expression
 * @param regExp Regular expression
 * @returns Function that returns the index of the first match
 */
export function search(regExp: string | RegExp): (str: string) => number {
  return str => str.search(regExp);
}
