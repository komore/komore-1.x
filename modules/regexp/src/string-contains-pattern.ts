/**
 * Creates a function that tests whether a pattern exists in a string
 * @param regExp Regular expression
 * @returns Function that tests whether the pattern exists in a string
 */
export function stringContainsPattern(regExp: RegExp): (str: string) => boolean {
  return str => regExp.test(str);
}
