import { type TemporalWithDate } from '../temporal-with-date';
import { isLastWeek } from '../week/is-last-week';
import { isWeekEnd } from './is-week-end';

/**
 * Returns true if the temporal occurs during the week-end of last week
 * @param temporal Temporal
 * @returns true if the temporal occurs during the week-end of last week
 */
export function isLastWeekEnd(temporal: TemporalWithDate): boolean {
  return isWeekEnd(temporal) && isLastWeek(temporal);
}
