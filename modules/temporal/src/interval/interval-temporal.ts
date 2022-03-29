import { type TemporalWithDate } from '../temporal-with-date';
import { type TemporalWithPartialDate } from '../temporal-with-partial-date';
import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Interval temporal
 */
export type IntervalTemporal = TemporalWithDate | TemporalWithTime | TemporalWithPartialDate;
