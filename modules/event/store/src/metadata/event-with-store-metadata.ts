import { type Event } from '@komore/event';

import { type EventStoreMetadata } from './event-store-metadata';

/**
 * Event with store metadata
 *
 * @template EventType Event type
 */
export interface EventWithStoreMetadata<EventType extends Event> {
  /**
   * Event
   */
  readonly event: EventType;
  /**
   * Metadata
   */
  readonly metadata: EventStoreMetadata;
}
