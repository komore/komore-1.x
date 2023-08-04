import { type TemporalWithDate } from '../temporal-with-date';
import { saturday } from './saturday';

/**
 * Tests whether a temporal occurs on a Saturday
 *
 * @param temporal Temporal with date
 * @returns true if the temporal occurs on a Saturday
 */
export function isSaturday(temporal: TemporalWithDate): boolean {
  return temporal.dayOfWeek === saturday;
}
