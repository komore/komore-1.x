import { getNowFor } from '../get-now-for';
import { type TemporalWithDate } from '../temporal-with-date';
import { type TemporalWithPartialDate } from '../temporal-with-partial-date';
import { type TemporalWithTime } from '../temporal-with-time';
import { isEarlierThan } from './is-earlier-than';

/**
 * Tests whether a temporal with date and time occurs in the past
 *
 * @param temporal Temporal
 * @returns true if the temporal occurs in the past
 */
export function isPast(temporal: TemporalWithDate | TemporalWithTime | TemporalWithPartialDate): boolean {
  return isEarlierThan(getNowFor(temporal))(temporal);
}
