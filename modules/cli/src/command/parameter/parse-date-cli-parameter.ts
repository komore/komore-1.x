/**
 * Parses a date CLI parameter
 *
 * @param value Value
 * @returns Plain date value
 */
export function parseDateCliParameter(value: string): Temporal.PlainDate {
  return Temporal.PlainDate.from(value);
}
