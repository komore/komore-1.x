/**
 * Creates a function that returns a string where all alphabetic characters have been converted to lowercase
 * @param locales Locale or list of locales
 * @returns Function that returns a string with lowercase characters
 */
export function stringToLowerCase(locales?: string | ReadonlyArray<string>): (str: string) => string {
  return str => str.toLocaleLowerCase(locales as undefined | string | Array<string>);
}
