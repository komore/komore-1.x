import { type GenericEvent } from '@komore/event';

import { type EventReducer } from './reducer/event-reducer';
import { type EventStoreSnapshotStrategy } from './snapshot/strategy/event-store-snapshot-strategy';

/**
 * Event store
 *
 * @template AggregateType Aggregate type
 * @template EventTypes Event types
 */
export interface EventStore<AggregateType, EventTypes extends ReadonlyArray<GenericEvent>> {
  /**
   * Initial value or initial value creator for new aggregates
   */
  readonly initialValue: AggregateType | (() => AggregateType);
  /**
   * Event reducer
   */
  readonly reducer: EventReducer<AggregateType, EventTypes>;
  /**
   * Snapshot strategy or strategies
   */
  readonly snapshotStrategy:
    | EventStoreSnapshotStrategy<AggregateType, EventTypes>
    | ReadonlyArray<EventStoreSnapshotStrategy<AggregateType, EventTypes>>;
}
