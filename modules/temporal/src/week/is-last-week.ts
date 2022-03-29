import { Temporal } from '@js-temporal/polyfill';
import { asPlainDate } from '../as-plain-date';
import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Tests whether a temporal with date occurs during the last week
 * @param temporal Temporal with date
 * @returns true if the temporal occurs during the last week
 */
export function isLastWeek(temporal: TemporalWithDate): boolean {
  const now = Temporal.Now.plainDateISO();
  const lastWeek = now.subtract({ weeks: 1 });
  const startOfLastWeek = lastWeek.subtract({ days: lastWeek.dayOfWeek - 1 });
  const plainDate = asPlainDate(temporal);
  const duration = startOfLastWeek.until(plainDate, { largestUnit: 'weeks' });
  return duration.sign >= 0 && duration.weeks === 0;
}
