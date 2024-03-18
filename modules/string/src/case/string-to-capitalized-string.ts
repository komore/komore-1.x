/**
 * Creates a function that returns a string where all alphabetic characters have been converted to uppercase
 *
 * @param locales Locale or list of locales
 * @returns Function that returns a string with uppercase characters
 */
export function stringToCapitalizedString(locales?: string | ReadonlyArray<string>): (string: string) => string {
  const typedLocales = locales as undefined | string | Array<string>;
  return string =>
    string.charAt(0).toLocaleUpperCase(typedLocales) + string.substring(1).toLocaleLowerCase(typedLocales);
}
