/**
 * Parses a date-time CLI parameter
 *
 * @param value Value
 * @returns Plain date-time value
 */
export function parseDateTimeCliParameter(value: string): Temporal.PlainDateTime {
  return Temporal.PlainDateTime.from(value);
}
