/**
 * Returns the last year
 *
 * @returns Last year
 */
export function lastYear(): number {
  const now = Temporal.Now.plainDateISO();
  return now.year - 1;
}
