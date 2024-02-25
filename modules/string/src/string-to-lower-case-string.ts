/**
 * Creates a function that returns a string where all alphabetic characters have been converted to lowercase
 *
 * @param locales Locale or list of locales
 * @returns Function that returns a string with lowercase characters
 */
export function stringToLowerCaseString(locales?: string | ReadonlyArray<string>): (string: string) => string {
  const typedLocales = locales as undefined | string | Array<string>;
  return string => string.toLocaleLowerCase(typedLocales);
}
