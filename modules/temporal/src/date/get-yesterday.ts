import { Temporal } from '@js-temporal/polyfill';

/**
 * Returns yesterday as a plain date
 * @returns Yesterday as a plain date
 */
export function getYesterday(): Temporal.PlainDate {
  const now = Temporal.Now.plainDateISO();
  return now.subtract({ days: 1 });
}
