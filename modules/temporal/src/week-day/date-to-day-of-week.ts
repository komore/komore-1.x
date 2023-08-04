import { type TemporalWithDate } from '../temporal-with-date';
import { type WeekDay } from './week-day';

/**
 * Returns the day of the week from a temporal with date
 *
 * @param temporal Temporal with date
 * @returns Day of the week
 */
export function dateToDayOfWeek(temporal: TemporalWithDate): WeekDay {
  return temporal.dayOfWeek as WeekDay;
}
