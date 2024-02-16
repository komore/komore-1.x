import { type GenericEvent } from '@komore/event';

import { type EventStoreMetadata } from './event-store-metadata';

/**
 * Event with store metadata
 *
 * @template EventType Event type
 */
export interface EventWithStoreMetadata<EventType extends GenericEvent> {
  /**
   * Event
   */
  readonly event: EventType;
  /**
   * Metadata
   */
  readonly metadata: EventStoreMetadata;
}
