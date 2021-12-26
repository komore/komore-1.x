import { type TemporalWithDate } from '../temporal-with-date';
import { isNextWeek } from '../week/is-next-week';
import { isWeekEnd } from './is-week-end';

/**
 * Returns true if the temporal occurs during the week-end of next week
 * @param temporal Temporal
 * @returns true if the temporal occurs during the week-end of next week
 */
export function isNextWeekEnd(temporal: TemporalWithDate): boolean {
  return isWeekEnd(temporal) && isNextWeek(temporal);
}
