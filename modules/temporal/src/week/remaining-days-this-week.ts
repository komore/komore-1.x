/**
 * Returns the number of remaining days for the current week
 *
 * @returns Number of remaining days for the current week
 */
export function remainingDaysThisWeek(): number {
  const now = Temporal.Now.plainDateISO();
  return 7 - now.dayOfWeek;
}
