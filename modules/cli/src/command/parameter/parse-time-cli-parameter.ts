import { Temporal } from '@js-temporal/polyfill';

/**
 * Parses a time CLI parameter
 * @param value Value
 * @returns Plain time value
 */
export function parseTimeCliParameter(value: string): Temporal.PlainTime {
  return Temporal.PlainTime.from(value);
}
