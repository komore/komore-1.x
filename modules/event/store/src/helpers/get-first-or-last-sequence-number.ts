import { type Event, type EventWithMetadata } from '@komore/event';

/**
 * Gets an event sequence number from a list of events for `FIRST` and `LAST` selection types
 * @param events List of events
 * @param selectionType Selection type
 * @returns Sequence number
 * @template EventTypes Event types
 */
export function getFirstOrLastSequenceNumber<EventTypes extends Event<string, Record<string, unknown> | undefined>[]>(
  eventsWithMetadata: ReadonlyArray<EventWithMetadata<EventTypes>>,
  selectionType: 'first' | 'last'
): number {
  if (selectionType === 'last') {
    return eventsWithMetadata[eventsWithMetadata.length - 1].metadata.sequenceNumber;
  }

  return eventsWithMetadata[0].metadata.sequenceNumber;
}
