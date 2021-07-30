import type { Duration } from './duration';

/**
 * Gets a duration in years
 * @param duration Duration
 * @returns Duration in years
 */
export function getDurationInYears(duration: Duration): number {
  return duration._ / (1000 * 60 * 60 * 24 * 365);
}
