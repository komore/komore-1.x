import { type Temporal } from '@js-temporal/polyfill';

/**
 * Returns an ISO 8601 duration string
 * @param duration Duration
 * @returns ISO 8601 duration string
 */
export function toISO8601Duration(duration: Temporal.Duration): string {
  return duration.toString();
}
