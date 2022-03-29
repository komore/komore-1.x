import { type Interval } from './interval';
import { type IntervalTemporal } from './interval-temporal';

/**
 * Interval temporal type
 * @template Interval
 */
export type IntervalTemporalType<T extends Interval<IntervalTemporal>> = T extends Interval<infer TemporalType>
  ? TemporalType
  : never;
