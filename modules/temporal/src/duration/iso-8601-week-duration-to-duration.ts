import { InvalidISO8601WeekDurationError } from './invalid-iso-8601-week-duration-error';

/**
 * Parses an ISO 8601 week duration
 *
 * @param iso8601WeekString ISO 8601 week string
 * @returns Duration
 */
export function iso8601WeekDurationToDuration(iso8601WeekString: string): Temporal.Duration {
  const matches = iso8601WeekString.match(iso8601WeekPattern);
  const weekNumberString = matches?.[1];
  if (weekNumberString === undefined) {
    throw new InvalidISO8601WeekDurationError(
      `invalid ISO 8601 week duration pattern "${iso8601WeekString}"`,
      iso8601WeekString
    );
  }

  const weeks = parseInt(weekNumberString, 10);

  return Temporal.Duration.from({ weeks });
}

/**
 * ISO 8601 week pattern
 */
const iso8601WeekPattern = /^P(-?\d+)W$/;
