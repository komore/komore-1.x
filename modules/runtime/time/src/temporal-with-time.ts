import type { Temporal } from './temporal';

/**
 * Temporal with a time component
 */
export interface TemporalWithTime extends Temporal {
  /**
   * Internal marker
   * @private
   */
  readonly _temporalWithTime: never;
}
