import { Event } from './event';
import { EventReducer } from './event-reducer';
import { InitialState, InitialStateCreator } from './initial-state';
import { SnapshotStrategy } from './snapshot-strategy';

/**
 * Event store
 * @template S State type
 * @template E Event types
 */
export type EventStore<S, E extends Event<any, any>[]> = Readonly<{
  /**
   * Initial state or initial state creator for new aggregates
   */
  initialState?: InitialState<S> | InitialStateCreator<S>;

  /**
   * Event reducer
   */
  reducer: EventReducer<S, E>;

  /**
   * Snapshot strategy
   */
  snapshotStrategy: SnapshotStrategy<S, E> | ReadonlyArray<SnapshotStrategy<S, E>>;
}>;
