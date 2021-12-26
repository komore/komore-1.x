import { type TemporalWithDate } from '../temporal-with-date';
import { isWeekEnd } from './is-week-end';

export function isWeekEndAfter(referenceTemporal: TemporalWithDate): (temporal: TemporalWithDate) => boolean {
  const weekAfter = isWeekAfter(referenceTemporal);
  return temporal => isWeekEnd(temporal) && isWeekAfter()
}