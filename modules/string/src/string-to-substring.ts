/**
 * Creates a function that returns a substring from a string
 *
 * @param range Zero-based range indicating the beginning and end of the substring
 * @returns Function that returns a substring from a string
 */
export function stringToSubstring(range: {
  readonly start?: number;
  readonly end?: number;
}): (string: string) => string {
  // TODO: use Range<number> as a single parameter
  const { start = 0, end } = range;
  return string => string.substring(start, end);
}
