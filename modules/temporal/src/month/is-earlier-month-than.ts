import { type TemporalWithDate } from '../temporal-with-date';
import { type TemporalWithPartialDate } from '../temporal-with-partial-date';

export function isEarlierMonthThan(
  _referenceTemporal: TemporalWithDate | TemporalWithPartialDate
): (temporal: TemporalWithDate | TemporalWithPartialDate) => boolean {
  return _temporal => false;
}
