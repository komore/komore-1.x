/**
 * Creates a function that matches a string with a regular expression
 *
 * @param regExp Regular expression
 * @returns Function that matches a string with the regular expression
 */
export function stringToMatchesWith<T = RegExpMatchArray>(regExp: string | RegExp): (string: string) => T | undefined {
  return string => (string.match(regExp) as T | null) ?? undefined;
}
