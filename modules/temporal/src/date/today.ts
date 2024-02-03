/**
 * Returns today as a plain date
 *
 * @returns Today as a plain date
 */
export function today(): Temporal.PlainDate {
  return Temporal.Now.plainDateISO();
}
