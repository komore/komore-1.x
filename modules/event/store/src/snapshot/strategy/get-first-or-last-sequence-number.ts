import { type Event, type EventWithMetadata } from '@komore/event';

import { type EventStoreSnapshotStrategySelectionType } from './event-store-snapshot-strategy-selection-type';

/**
 * Returns an event sequence number from a list of events for `first` and `last` selection types
 *
 * @param eventsWithMetadata List of events with their metadata
 * @param selectionType Selection type
 * @returns Sequence number
 * @template EventTypes Event types
 */
export function getFirstOrLastSequenceNumber<EventTypes extends Event<string, Record<string, unknown> | undefined>[]>(
  eventsWithMetadata: ReadonlyArray<EventWithMetadata<EventTypes>>,
  selectionType: Extract<EventStoreSnapshotStrategySelectionType, 'first' | 'last'>
): number {
  const eventWithMetadata =
    selectionType === 'last' ? eventsWithMetadata[eventsWithMetadata.length - 1] : eventsWithMetadata[0];
  return (eventWithMetadata as NonNullable<typeof eventWithMetadata>).metadata.sequenceNumber;
}
