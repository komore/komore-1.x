import { Temporal } from '@js-temporal/polyfill';

/**
 * ISO 8601 week pattern
 */
const iso8601WeekPattern = /^P(\d+)W$/;

/**
 * Parses an ISO 8601 week duration
 * @param iso8601WeekString ISO 8601 week string
 * @returns Duration
 */
export function fromISO8601WeekDuration(iso8601WeekString: string): Temporal.Duration {
  const matches = iso8601WeekString.match(iso8601WeekPattern);
  if (matches === null) {
    throw new Error(`invalid ISO 8601 week duration ${iso8601WeekString}`);
  }

  const weeks = parseInt(matches[1], 10);
  if (isNaN(weeks)) {
    throw new Error(`invalid ISO 8601 week duration ${iso8601WeekString}`);
  }

  return Temporal.Duration.from({ weeks });
}
