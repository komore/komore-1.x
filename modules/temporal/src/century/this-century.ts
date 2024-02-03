/**
 * Returns the current century
 *
 * @returns Current century
 */
export function thisCentury(): number {
  const now = Temporal.Now.plainDateISO();
  return Math.ceil(now.year / 100);
}
