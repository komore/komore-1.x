import { Event } from './event';

/**
 * Event repository
 * @typeparam E Event type
 */
export interface EventRepository<E extends Event<any, any>> {
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
  ): Promise<ReadonlyArray<E>>;

  /**
   * Saves events to the repository
   * @param aggregateKey Aggregate key
   * @param events List of events
   */
  saveEvents(aggregateKey: string, events: ReadonlyArray<E>): Promise<void>;
}
