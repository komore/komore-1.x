/**
 * Returns the current year
 *
 * @returns Current year
 */
export function thisYear(): number {
  const now = Temporal.Now.plainDateISO();
  return now.year;
}
