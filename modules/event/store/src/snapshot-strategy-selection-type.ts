/**
 * Snapshot strategy selection type
 *
 * There are 5 selection types:
 *
 * 1. `AFTER`: the event immediately after the event that matches the strategy is the last event for the snapshot
 * 2. `AT`: the event that matches the strategy is the last event for the snapshot
 * 3. `BEFORE`: the event immediately before the event that matches the strategy is the last event for the snapshot
 * 4. `FIRST`: the first event is the last event for the snapshot when there is a match
 * 5. `LAST`: the last event is the last event for the snapshot when there is a match
 *
 * No snapshot will be created when using the `BEFORE` selection type and the first event matches, or when using the
 * `AFTER` selection type and the last event matches.
 */
export enum SnapshotStrategySelectionType {
  AFTER = 'after',
  AT = 'at',
  BEFORE = 'before',
  FIRST = 'first',
  LAST = 'last'
}
