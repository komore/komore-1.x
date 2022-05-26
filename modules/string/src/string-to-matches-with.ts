/**
 * Creates a function that matches a string with a regular expression
 *
 * @param regExp Regular expression
 * @returns Function that matches a string with the regular expression
 */
export function stringToMatchesWith(regExp: string | RegExp): (str: string) => RegExpMatchArray | null {
  return str => str.match(regExp);
}
