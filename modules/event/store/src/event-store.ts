import { type Event } from '@komore/event';

import { type EventReducer } from './reducer/event-reducer';
import { type EventStoreSnapshotStrategy } from './snapshot/strategy/event-store-snapshot-strategy';

/**
 * Event store
 *
 * @template AggregateType Aggregate type
 * @template EventType Event type
 */
export interface EventStore<AggregateType, EventType extends Event> {
  /**
   * Initial value or initial value creator for new aggregates
   */
  readonly initialValue: AggregateType | (() => AggregateType);
  /**
   * Event reducer
   */
  readonly reducer: EventReducer<AggregateType, EventType>;
  /**
   * Snapshot strategy or strategies
   */
  readonly snapshotStrategy:
    | EventStoreSnapshotStrategy<AggregateType, EventType>
    | ReadonlyArray<EventStoreSnapshotStrategy<AggregateType, EventType>>;
}
