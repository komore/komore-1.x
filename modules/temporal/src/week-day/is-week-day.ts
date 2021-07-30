import type { TemporalWithDate } from '../temporal-with-date';
import type { WeekDay } from './week-day';

/**
 * Creates a function that tests whether a temporal occurs on a specific week day
 * @param weekDay Week day
 * @returns Function that tests whether a temporal occurs on the specific week day
 */
export function isWeekDay(weekDay: WeekDay): (temporal: TemporalWithDate) => boolean {
  return temporal => temporal.dayOfWeek === weekDay;
}
