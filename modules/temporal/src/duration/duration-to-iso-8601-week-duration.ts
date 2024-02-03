/**
 * Returns an ISO 8601 week duration, given a duration
 *
 * @param duration Duration
 * @returns ISO 8601 week duration
 */
export function durationToISO8601WeekDuration(duration: Temporal.Duration): string {
  const now = Temporal.Now.plainDateTimeISO();
  const weeks = duration.total({ unit: 'weeks', relativeTo: now });
  const fullWeeks = Math.floor(weeks);
  return `P${fullWeeks}W`;
}
