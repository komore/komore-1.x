import { type GenericEvent } from '@komore/event';

import { type EventStoreSnapshotStrategy } from './snapshot/strategy/event-store-snapshot-strategy';
import { type EventReducer } from './reducer/event-reducer';

/**
 * Event store options
 *
 * @template AggregateType Aggregate type
 * @template EventType Event type
 */
export interface EventStoreOptions<AggregateType, EventType extends GenericEvent> {
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
