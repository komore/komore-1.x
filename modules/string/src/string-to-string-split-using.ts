/**
 * Creates a function that splits a string into substrings using the specified separator
 *
 * @param separator Separator
 * @param limit Limit
 * @returns Function that splits a string into substrings
 * @keyword string
 * @keyword split
 */
export function stringToStringSplitUsing(
  separator: string | RegExp,
  limit?: number
): (string: string) => Array<string> {
  return string => string.split(separator, limit);
}
