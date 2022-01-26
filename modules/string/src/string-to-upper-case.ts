/**
 * Creates a function that returns a string where all alphabetic characters have been converted to uppercase
 * @param str String
 * @returns Function that returns a string with uppercase characters
 */
 export function stringToUpperCase(locales?: string | ReadonlyArray<string>): (str: string) => string {
  return str => str.toLocaleUpperCase(locales as undefined | string | Array<string>);
}
