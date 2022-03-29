import { Temporal } from '@js-temporal/polyfill';
import { asPlainDate } from '../as-plain-date';
import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Tests whether a temporal with date occurs during the next week
 * @param temporal Temporal with date
 * @returns true if the temporal occurs during the next week
 */
export function isNextWeek(temporal: TemporalWithDate): boolean {
  const now = Temporal.Now.plainDateISO();
  const nextWeek = now.add({ weeks: 1 });
  const startOfNextWeek = nextWeek.subtract({ days: nextWeek.dayOfWeek - 1 });
  const plainDate = asPlainDate(temporal);
  const duration = startOfNextWeek.until(plainDate, { largestUnit: 'weeks' });
  return duration.sign >= 0 && duration.weeks === 0;
}
