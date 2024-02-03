/**
 * Returns yesterday as a plain date
 *
 * @returns Yesterday as a plain date
 */
export function yesterday(): Temporal.PlainDate {
  const now = Temporal.Now.plainDateISO();
  return now.subtract({ days: 1 });
}
