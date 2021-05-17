import type { TemporalWithDate } from './temporal-with-date';

/**
 * Local date
 */
export interface LocalDate extends TemporalWithDate {
  /**
   * Internal marker
   * @private
   */
  readonly _t: 'local-date';
}
