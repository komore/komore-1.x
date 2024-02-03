/**
 * Returns the number of elapsed days for the current week
 *
 * @returns Number of elapsed days for the current week
 */
export function elapsedDaysThisWeek(): number {
  const now = Temporal.Now.plainDateISO();
  return now.dayOfWeek - 1;
}
