import type { Duration } from './duration';

/**
 * Gets a duration in days
 * @param duration Duration
 * @returns Duration in days
 */
export function getDurationInDays(duration: Duration): number {
  return duration._ / (1000 * 60 * 60 * 24);
}
