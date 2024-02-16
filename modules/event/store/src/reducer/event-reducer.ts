import { type GenericEvent } from '@komore/event';

import { type EventStoreMetadata } from '../metadata/event-store-metadata';

/**
 * Event reducer
 *
 * @param state State
 * @param event Event
 * @param metadata Event metadata
 * @returns Reduced state
 * @template AggregateType State type
 * @template EventType Event type
 */
export interface EventReducer<AggregateType, EventType extends GenericEvent> {
  (state: AggregateType | undefined, event: EventType, metadata: EventStoreMetadata): AggregateType;
}
