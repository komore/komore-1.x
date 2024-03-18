import { type Event } from '@komore/event';

import { type EventWithStoreMetadata } from '../metadata/event-with-store-metadata';

/**
 * Event store event repository store parameters
 *
 * @template EventType Event type
 */
export interface EventStoreEventRepositoryStoreParameters<EventType extends Event> {
  /**
   * List of events
   */
  readonly events: ReadonlyArray<EventWithStoreMetadata<EventType>>;
}
