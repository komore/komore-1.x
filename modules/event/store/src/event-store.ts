import { type Event, type EventReducer } from '@komore/event';

import { type EventStoreSnapshotStrategy } from './snapshot/strategy/event-store-snapshot-strategy';

/**
 * Event store
 *
 * @template AggregateType Aggregate type
 * @template EventTypes Event types
 */
export type EventStore<
  AggregateType,
  EventTypes extends Event<string, Record<string, unknown> | undefined>[],
> = Readonly<{
  /**
   * Initial value or initial value creator for new aggregates
   */
  initialValue: AggregateType | (() => AggregateType);
  /**
   * Event reducer
   */
  reducer: EventReducer<AggregateType, EventTypes>;
  /**
   * Snapshot strategy or strategies
   */
  snapshotStrategy:
    | EventStoreSnapshotStrategy<AggregateType, EventTypes>
    | ReadonlyArray<EventStoreSnapshotStrategy<AggregateType, EventTypes>>;
}>;
