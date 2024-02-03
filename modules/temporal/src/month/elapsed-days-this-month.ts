/**
 * Returns the number of elapsed days for the current month
 *
 * @returns Number of elapsed days for the current month
 */
export function elapsedDaysThisMonth(): number {
  const now = Temporal.Now.plainDateISO();
  const startOfMonth = now.with({ day: 1 });
  return startOfMonth.until(now, { largestUnit: 'days' }).days;
}
