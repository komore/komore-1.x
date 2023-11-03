/**
 * Event store snapshot strategy selection type
 */
export type EventStoreSnapshotStrategySelectionType =
  /**
   * Given an event matching a strategy, the snapshot includes all events until the event that is immediately after
   * @note No snapshot will be created if the event that matched the strategy was the last one
   */
  | 'after'
  /**
   * Given an event matching a strategy, the snapshot includes all events up to that specific event
   */
  | 'at'
  /**
   * Given an event matching a strategy, the snapshot includes all events until the event that is immediately before
   * @note No snapshot will be created if the event that matched the strategy was the first one
   */
  | 'before'
  /**
   * The snapshot only includes the first event (TODO: ??)
   */
  | 'first'
  /**
   * The snapshot includes all events
   */
  | 'last';
