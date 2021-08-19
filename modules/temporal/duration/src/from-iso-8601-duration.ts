import { Temporal } from '@js-temporal/polyfill';

/**
 * Returns a duration from an ISO 8601 duration string
 * @param iso8601DurationString ISO 8601 duration string
 * @returns Duration
 */
export function fromISO8601Duration(iso8601DurationString: string): Temporal.Duration {
  return Temporal.Duration.from(iso8601DurationString);
}
