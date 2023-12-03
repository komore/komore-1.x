/**
 * From event source options
 */
export interface FromEventSourceOptions {
  /**
   * Transfer ownership of the event source, meaning the event source will be closed when the observable is no longer
   * observed
   */
  readonly transferOwnership: boolean;
}
