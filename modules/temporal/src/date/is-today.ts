import { Temporal } from 'proposal-temporal';
import { asPlainDate } from '../as-plain-date';
import type { TemporalWithDate } from '../temporal-with-date';

/**
 * Tests whether a temporal occurs today
 * @param temporal Temporal
 * @returns true if the temporal occurs today
 */
export function isToday(temporal: TemporalWithDate): boolean {
  const plainDate = asPlainDate(temporal);
  const now = Temporal.now.plainDateISO();
  return plainDate.until(now).sign === 0;
}
