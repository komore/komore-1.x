import { type EventFromType, type EventType as GenericEventType } from '@komore/event';

import { type EventReducer } from './reducer/event-reducer';
import { type EventStoreEventRepository } from './repository/event-store-event-repository';
import { type EventStoreSnapshotStrategy } from './snapshot/strategy/event-store-snapshot-strategy';
import { type EventStoreSnapshotRepository } from './repository/event-store-snapshot-repository';

/**
 * Event store options
 *
 * @template AggregateType Aggregate type
 * @template EventType Event type
 */
export interface EventStoreOptions<AggregateType, EventType extends GenericEventType> {
  /**
   * Event options
   */
  readonly event: {
    /**
     * Event repository
     */
    readonly repository: EventStoreEventRepository<EventFromType<EventType>>;
    /**
     * Event type
     */
    readonly type: EventType;
  };
  /**
   * Initial value or initial value creator for new aggregates
   */
  readonly initialValue: AggregateType | (() => AggregateType);
  /**
   * Event reducer
   */
  readonly reducer: EventReducer<AggregateType, EventFromType<EventType>>;
  /**
   * Snapshot options
   */
  readonly snapshot?: {
    /**
     * Snapshot repository
     */
    readonly repository: EventStoreSnapshotRepository<AggregateType>;
    /**
     * Snapshot strategy or strategies
     */
    readonly strategy:
      | EventStoreSnapshotStrategy<AggregateType, EventFromType<EventType>>
      | ReadonlyArray<EventStoreSnapshotStrategy<AggregateType, EventFromType<EventType>>>;
  };
}
