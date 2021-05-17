/**
 * Temporal type
 */
export interface Temporal {
  /**
   * Internal representation
   * @private
   */
  readonly _: Date;
  /**
   * Internal type
   * @private
   */
  readonly _t: string;
}
