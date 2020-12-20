/**
 * Observe event source options
 */
export type ObserveEventSourceOptions = Readonly<{
  /**
   * Transfer ownership of the event source, meaning the event source will be closed when unsubscribed
   */
  transferOwnership: boolean;
}>;
