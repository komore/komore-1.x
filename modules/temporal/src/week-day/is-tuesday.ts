import type { TemporalWithDate } from '../temporal-with-date';
import { WeekDay } from './week-day';

/**
 * Tests whether a temporal occurs on a Tuesday
 * @param temporal Temporal
 * @returns true if the temporal occurs on a Tuesday
 */
export function isTuesday(temporal: TemporalWithDate): boolean {
  return temporal.dayOfWeek === WeekDay.TUESDAY;
}
