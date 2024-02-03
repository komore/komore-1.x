/**
 * Returns the next year
 *
 * @returns Next year
 */
export function nextYear(): number {
  const now = Temporal.Now.plainDateISO();
  return now.year + 1;
}
