/**
 * Snapshot strategy selection type
 *
 * There are 5 selection types:
 *
 * 1. `after`: the event immediately after the event that matches the strategy is the last event for the snapshot
 * 2. `at`: the event that matches the strategy is the last event for the snapshot
 * 3. `before`: the event immediately before the event that matches the strategy is the last event for the snapshot
 * 4. `first`: the first event is the last event for the snapshot when there is a match
 * 5. `last`: the last event is the last event for the snapshot when there is a match
 *
 * No snapshot will be created when using the `before` selection type and the first event matches, or when using the
 * `after` selection type and the last event matches.
 */
export type SnapshotStrategySelectionType = 'after' | 'at' | 'before' | 'first' | 'last';
