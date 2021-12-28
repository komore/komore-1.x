/**
 * Creates a function that splits a string into substrings using the specified separator
 * @param separator Separator
 * @param limit Limit
 * @returns Function that splits a string into substrings
 */
export function toStringSplitUsing(separator: string | RegExp, limit?: number): (str: string) => Array<string> {
  return str => str.split(separator, limit);
}
