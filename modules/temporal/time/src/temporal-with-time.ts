import type { Temporal } from '@komore/temporal';

/**
 * Temporal with a time component
 */
export interface TemporalWithTime extends Temporal {
  /**
   * Internal marker
   * @private
   */
  readonly _withTime: never;
}
