import { Temporal } from '@js-temporal/polyfill';

/**
 * Returns tomorrow as a plain date
 * @returns Tomorrow as a plain date
 */
export function getTomorrow(): Temporal.PlainDate {
  const now = Temporal.Now.plainDateISO();
  return now.add({ days: 1 });
}
