import { Temporal } from 'proposal-temporal';

/**
 * Returns tomorrow as a plain date
 * @returns Tomorrow as a plain date
 */
export function getTomorrow(): Temporal.PlainDate {
  const now = Temporal.now.plainDateISO();
  return now.add({ days: 1 });
}
