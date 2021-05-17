import type { Temporal } from './temporal';

/**
 * Temporal with a date component
 */
export interface TemporalWithDate extends Temporal {
  /**
   * Internal marker
   * @private
   */
  readonly _temporalWithDate: never;
}
