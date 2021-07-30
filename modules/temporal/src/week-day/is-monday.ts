import type { TemporalWithDate } from '../temporal-with-date';
import { WeekDay } from './week-day';

/**
 * Tests whether a temporal occurs on a Monday
 * @param temporal Temporal
 * @returns true if the temporal occurs on a Monday
 */
export function isMonday(temporal: TemporalWithDate): boolean {
  return temporal.dayOfWeek === WeekDay.MONDAY;
}
