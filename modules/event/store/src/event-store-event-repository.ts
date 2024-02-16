import { type GenericEvent } from '@komore/event';

/**
 * Event store event repository
 *
 * @template EventTypes Event types
 */
export interface EventStoreEventRepository<EventType extends GenericEvent> {
  /**
   * Loads events from the repository
   *
   * If `sequenceStart` is not provided, events are loaded from the first one.
   *
   * If `sequenceEnd` is not provided, events are loaded until the last one.
   *
   * @param aggregateKey Aggregate key
   * @param sequenceStart Sequence start
   * @param sequenceEnd Sequence end
   * @returns List of events
   */
  loadEvents(
    aggregateKey: string,
    sequenceStart: number | undefined,
    sequenceEnd: number | undefined
  ): Observable<ReadonlyArray<EventType>>;
  /**
   * Stores events to the repository
   * @param aggregateKey Aggregate key
   * @param events List of events
   */
  storeEvents(aggregateKey: string, events: ReadonlyArray<EventType>): Observable<void>;
}
