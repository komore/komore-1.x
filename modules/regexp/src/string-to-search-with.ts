/**
 * Creates a function that executes a search for a match in a string using a regular expression
 *
 * @param regExp Regular expression
 * @returns Function that executes a search for a match in a string using the regular expression
 */
export function stringToSearchWith(regExp: RegExp): (str: string) => RegExpExecArray | undefined {
  return str => regExp.exec(str) ?? undefined;
}
