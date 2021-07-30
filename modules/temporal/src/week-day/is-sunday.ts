import type { TemporalWithDate } from '../temporal-with-date';
import { WeekDay } from './week-day';

/**
 * Tests whether a temporal occurs on a Sunday
 * @param temporal Temporal with date
 * @returns true if the temporal occurs on a Sunday
 */
export function isSunday(temporal: TemporalWithDate): boolean {
  return temporal.dayOfWeek === WeekDay.SUNDAY;
}
