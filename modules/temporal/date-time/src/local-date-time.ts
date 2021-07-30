import type { InstantWithDateTime } from './instant-with-date-time';
import type { localDateTimeMarker } from './local-date-time-marker';

/**
 * Local date time
 */
export interface LocalDateTime extends InstantWithDateTime {
  /**
   * Internal marker
   * @private
   */
  readonly _t: typeof localDateTimeMarker;
}
