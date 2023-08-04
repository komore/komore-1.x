import { type TemporalWithDate } from '../temporal-with-date';
import { tuesday } from './tuesday';

/**
 * Tests whether a temporal occurs on a Tuesday
 *
 * @param temporal Temporal
 * @returns true if the temporal occurs on a Tuesday
 */
export function isTuesday(temporal: TemporalWithDate): boolean {
  return temporal.dayOfWeek === tuesday;
}
