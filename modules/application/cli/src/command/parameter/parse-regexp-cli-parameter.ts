/**
 * Parses a regular expression CLI parameter
 *
 * @param value Value
 * @returns Regular expression
 */
export function parseRegExpCliParameter(value: string): RegExp {
  return new RegExp(value);
}
