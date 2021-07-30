import type { TemporalWithDate } from '../temporal-with-date';
import { WeekDay } from './week-day';

/**
 * Tests whether a temporal occurs on a Thursday
 * @param temporal Temporal
 * @returns true if the temporal occurs on a Thursday
 */
export function isThursday(temporal: TemporalWithDate): boolean {
  return temporal.dayOfWeek === WeekDay.THURSDAY;
}
