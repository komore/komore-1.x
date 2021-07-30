import { Temporal } from 'proposal-temporal';

/**
 * Gets today as a plain date
 * @returns Today as a plain date
 */
export function getToday(): Temporal.PlainDate {
  return Temporal.now.plainDateISO();
}
