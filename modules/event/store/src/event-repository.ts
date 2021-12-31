import { type Event } from '@komore/event';
import { type Observable } from '@komore/reactive';

/**
 * Event repository
 * @template EventTypes Event types
 */
export interface EventRepository<EventTypes extends Event<string, Record<string, unknown> | undefined>[]> {
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
  ): Observable<ReadonlyArray<EventTypes[number]>>;

  /**
   * Stores events to the repository
   * @param aggregateKey Aggregate key
   * @param events List of events
   */
  storeEvents(aggregateKey: string, events: ReadonlyArray<EventTypes[number]>): Observable<void>;
}
