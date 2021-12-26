import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Tests whether a temporal occurs on a week-end
 * @param temporal Temporal with date
 * @returns true if `temporal` occurs on a week-end
 */
export function isWeekEnd(temporal: TemporalWithDate): boolean {
  const weekDay = temporal.dayOfWeek;
  // TODO: other days may be considered the week-end depending on calendar/language/culture/etc.
  return weekDay === 6 || weekDay === 7;
}
