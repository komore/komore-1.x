import { Temporal } from 'proposal-temporal';

/**
 * Returns yesterday as a plain date
 * @returns Yesterday as a plain date
 */
export function getYesterday(): Temporal.PlainDate {
  const now = Temporal.now.plainDateISO();
  return now.subtract({ days: 1 });
}
