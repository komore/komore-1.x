/**
 * Not blank regular expression
 */
const notBlankRegExp = /[^\s]+/;

/**
 * Returns true if the string is blank, i.e. it contains nothing but space characters
 * @param str String
 * @returns true if the string is blank
 */
export function isBlankString(str: string): boolean {
  return !notBlankRegExp.test(str);
}
