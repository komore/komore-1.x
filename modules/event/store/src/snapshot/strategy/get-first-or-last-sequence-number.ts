import { type Event } from '@komore/event';

import { type EventWithStoreMetadata } from '../../metadata/event-with-store-metadata';
import { type EventStoreSnapshotStrategySelectionType } from './event-store-snapshot-strategy-selection-type';

/**
 * Returns an event sequence number from a list of events for `first` and `last` selection types
 *
 * @param eventsWithMetadata List of events with their metadata
 * @param selectionType Selection type
 * @returns Sequence number
 * @template EventType Event type
 */
export function getFirstOrLastSequenceNumber<EventType extends Event>(
  eventsWithMetadata: readonly [EventWithStoreMetadata<EventType>, ...ReadonlyArray<EventWithStoreMetadata<EventType>>],
  selectionType: Extract<EventStoreSnapshotStrategySelectionType, 'first' | 'last'>
): number {
  const { metadata } =
    selectionType === 'last'
      ? (eventsWithMetadata[eventsWithMetadata.length - 1] as (typeof eventsWithMetadata)[number])
      : eventsWithMetadata[0];
  return metadata.sequenceNumber;
}
