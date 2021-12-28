import { type Temporal } from '@js-temporal/polyfill';

/**
 * Returns an ISO 8601 week duration
 * @param duration Duration
 * @returns ISO 8601 week duration
 */
export function toISO8601WeekDuration(duration: Temporal.Duration): string {
  const weeks = duration.weeks;
  return `P${weeks}W`;
}
