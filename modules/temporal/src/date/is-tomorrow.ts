import { Temporal } from '@js-temporal/polyfill';
import { asPlainDate } from '../as-plain-date';
import type { TemporalWithDate } from '../temporal-with-date';

/**
 * Tests whether a temporal occurs tomorrow
 * @param temporal Temporal
 * @returns true if the temporal occurs tomorrow
 */
export function isTomorrow(temporal: TemporalWithDate): boolean {
  const plainDate = asPlainDate(temporal);
  const now = Temporal.now.plainDateISO();
  const tomorrow = now.add({ days: 1 });
  return plainDate.until(tomorrow).sign === 0;
}
