import type { Duration } from './duration';

/**
 * Gets a duration in months
 * @param duration Duration
 * @returns Duration in months
 */
export function getDurationInMonths(duration: Duration): number {
  return duration._ / (1000 * 60 * 60 * 24 * 30);
}
