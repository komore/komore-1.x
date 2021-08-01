/**
 * Splits a string into substrings using the specified separator
 * @param separator 
 * @param limit 
 * @returns List of substrings
 */
export function split(separator: string | RegExp, limit?: number): (str: string) => unknown {
  return str => str.split(separator, limit);
}
