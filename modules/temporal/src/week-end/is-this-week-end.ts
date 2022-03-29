import { type TemporalWithDate } from '../temporal-with-date';
import { isThisWeek } from '../week/is-this-week';
import { isWeekEnd } from './is-week-end';

/**
 * Returns true if the temporal occurs during the current week's week-end
 * @param temporal Temporal
 * @returns true if the temporal occurs during the current week's week-end
 */
export function isThisWeekEnd(temporal: TemporalWithDate): boolean {
  return isWeekEnd(temporal) && isThisWeek(temporal);
}
