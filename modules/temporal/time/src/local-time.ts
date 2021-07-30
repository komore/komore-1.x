import type { localTimeMarker } from './local-time-marker';
import type { TemporalWithTime } from './temporal-with-time';

/**
 * Local time
 */
export interface LocalTime extends TemporalWithTime {
  /**
   * Internal marker
   * @private
   */
  readonly _t: typeof localTimeMarker;
}
