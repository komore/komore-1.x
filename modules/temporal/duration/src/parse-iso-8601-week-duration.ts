import { createDuration } from "./create-duration";
import type { Duration } from "./duration";

/**
 * ISO 8601 week pattern
 */
const iso8601WeekPattern = /P(\d+)W/;

/**
 * Parses an ISO 8601 week duration
 * @param iso8601 ISO 8601 week duration
 * @returns Duration
 */
export function parseISO8601WeekDuration(iso8601: string): Duration {
  const matches = iso8601.match(iso8601WeekPattern);
  if (matches === null) {
    throw new Error(`invalid ISO 8601 week duration ${iso8601}`);
  }

  const weeks = parseInt(matches[1], 10);
  return createDuration(weeks * 7 * 24 * 60 * 60 * 1000);
}
