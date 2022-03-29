import { type TemporalWithDate } from '../temporal-with-date';
import { type WeekDay } from './week-day';

/**
 * Creates a function that tests whether a temporal or week day occurs during an later week day than a reference
 * temporal or week day
 * @param referenceTemporal Reference temporal or week day
 * @returns Function that tests whether a temporal or week day occurs during an later week day than a reference
 *          temporal or week day
 */
export function isLaterWeekDayThan(
  referenceTemporal: TemporalWithDate | WeekDay
): (temporal: TemporalWithDate | WeekDay) => boolean {
  const referenceWeekDay = typeof referenceTemporal === 'number' ? referenceTemporal : referenceTemporal.dayOfWeek;
  return temporal => {
    const weekDay = typeof temporal === 'number' ? temporal : temporal.dayOfWeek;
    return weekDay > referenceWeekDay;
  };
}
