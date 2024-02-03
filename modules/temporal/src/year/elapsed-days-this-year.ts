/**
 * Returns the number of elapsed days since the start of the current year
 *
 * @returns Number of elapsed days since the start of the current year
 */
export function elapsedDaysThisYear(): number {
  const now = Temporal.Now.plainDateISO();
  return now.dayOfYear - 1;
}
