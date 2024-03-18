import { type Event } from '@komore/event';

import { type EventStoreEventRepositoryLoadParameters } from './event-store-event-repository-load-parameters';
import { type EventStoreEventRepositoryStoreParameters } from './event-store-event-repository-store-parameters';
import { type EventWithStoreMetadata } from '../metadata/event-with-store-metadata';

/**
 * Event store event repository
 *
 * @template EventType Event type
 */
export interface EventStoreEventRepository<EventType extends Event> {
  /**
   * Loads events from the repository
   *
   * If `sequenceStart` is not provided, events are loaded from the first one.
   *
   * If `sequenceEnd` is not provided, events are loaded until the last one.
   *
   * @param parameters Parameters
   * @returns List of events
   */
  loadEvents(
    parameters: EventStoreEventRepositoryLoadParameters
  ): Observable<ReadonlyArray<EventWithStoreMetadata<EventType>>>;
  /**
   * Stores events to the repository
   *
   * @param parameters Parameters
   */
  storeEvents(parameters: EventStoreEventRepositoryStoreParameters<EventType>): Observable<void>;
}
