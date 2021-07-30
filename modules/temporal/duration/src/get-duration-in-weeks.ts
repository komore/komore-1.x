import type { Duration } from "./duration";

/**
 * Gets a duration in weeks
 * @param duration Duration
 * @returns Duration in weeks
 */
export function getDurationInWeeks(duration: Duration): number {
  const milliseconds = duration._;
  return milliseconds / (1000 * 60 * 60 * 24 * 7);
}
