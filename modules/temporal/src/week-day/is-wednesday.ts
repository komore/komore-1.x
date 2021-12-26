import { type TemporalWithDate } from '../temporal-with-date';
import { WeekDay } from './week-day';

/**
 * Tests whether a temporal occurs on a Wednesday
 * @param temporal Temporal
 * @returns true if the temporal occurs on a Wednesday
 */
export function isWednesday(temporal: TemporalWithDate): boolean {
  return temporal.dayOfWeek === WeekDay.WEDNESDAY;
}
