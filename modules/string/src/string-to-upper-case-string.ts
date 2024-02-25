/**
 * Creates a function that returns a string where all alphabetic characters have been converted to uppercase
 *
 * @param locales Locale or list of locales
 * @returns Function that returns a string with uppercase characters
 */
export function stringToUpperCaseString(locales?: string | ReadonlyArray<string>): (string: string) => string {
  const typedLocales = locales as undefined | string | Array<string>;
  return string => string.toLocaleUpperCase(typedLocales);
}
