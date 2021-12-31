import { type Event, type EventReducer } from '@komore/event';
import { type SnapshotStrategy } from './snapshot-strategy';

/**
 * Event store
 * @template StateType State type
 * @template EventTypes Event types
 */
export type EventStore<StateType, EventTypes extends Event<string, Record<string, unknown> | undefined>[]> = Readonly<{
  /**
   * Initial state or initial state creator for new aggregates
   */
  initialState: StateType;

  /**
   * Event reducer
   */
  reducer: EventReducer<StateType, EventTypes>;

  /**
   * Snapshot strategy
   */
  snapshotStrategy: SnapshotStrategy<StateType, EventTypes> | ReadonlyArray<SnapshotStrategy<StateType, EventTypes>>;
}>;
