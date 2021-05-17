import type { TemporalWithTime } from './temporal-with-time';

/**
 * Offset time
 */
export interface OffsetTime extends TemporalWithTime {
  /**
   * Internal marker
   * @private
   */
  readonly _t: 'offset-time';
}
