import type { Temporal } from 'proposal-temporal';
import type { durationMarker } from './duration-marker';

/**
 * Duration
 */
export interface Duration {
  /**
   * Duration marker
   * @private
   */
  readonly _t: typeof durationMarker;
  /**
   * Duration in milliseconds
   * @private
   */
  readonly _: Temporal.Duration;
}
