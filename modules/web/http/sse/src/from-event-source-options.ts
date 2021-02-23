/**
 * From event source options
 */
export type FromEventSourceOptions = Readonly<{
  /**
   * Transfer ownership of the event source, meaning the event source will be closed when the observable is unsubscribed
   */
  transferOwnership: boolean;
}>;
