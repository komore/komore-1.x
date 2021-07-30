/**
 * Returns the substring at the specified location
 * @param start Zero-based index indicating the beginning of the substring
 * @param end Zero-based index number indicating the end of the substring
 * @returns Substring
 */
export function substring(start: number, end?: number): (str: string) => string {
  return str => str.substring(start, end);
}
