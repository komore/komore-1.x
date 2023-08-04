import { type TemporalWithDate } from '../temporal-with-date';
import { friday } from './friday';

/**
 * Tests whether a temporal occurs on a Friday
 *
 * @param temporal Temporal
 * @returns true if the temporal occurs on a Friday
 */
export function isFriday(temporal: TemporalWithDate): boolean {
  return temporal.dayOfWeek === friday;
}
