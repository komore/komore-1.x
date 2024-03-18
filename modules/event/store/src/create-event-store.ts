import { type EventFromType, type EventType as GenericEventType } from '@komore/event';

import { type EventStore } from './event-store';
import { type EventStoreOptions } from './event-store-options';

/**
 * Creates an event store
 *
 * @param storeOptions Event store options
 * @returns Event store
 * @template AggregateType Aggregate type
 * @template EventType Event type
 */
export function createEventStore<AggregateType, EventType extends GenericEventType>(
  storeOptions: EventStoreOptions<AggregateType, EventType>
): EventStore<AggregateType, EventFromType<EventType>> {
  const {
    event: { repository: _eventRepository, type: _eventType },
    reducer: _r,
    snapshot: _s,
  } = storeOptions;
  return {};
}
