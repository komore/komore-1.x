import { type Event, type EventWithMetadata } from '@komore/event';

import { type EventStoreSnapshotStrategySelectionType } from './event-store-snapshot-strategy-selection-type';

/**
 * Returns an event sequence number from a list of events and an index for `after`, `at` and `before` selection types
 *
 * @param events List of events
 * @param selectionType Selection type
 * @param index Index where the base strategy condition was met
 * @returns Sequence number
 * @template EventTypes Event types
 * @private
 */
export function getAfterAtOrBeforeSequenceNumber<
  EventTypes extends Event<string, Record<string, unknown> | undefined>[],
>(
  eventsWithMetadata: ReadonlyArray<EventWithMetadata<EventTypes>>,
  selectionType: Extract<EventStoreSnapshotStrategySelectionType, 'after' | 'at' | 'before'>,
  index: number
): number | false {
  switch (selectionType) {
    case 'after':
      return index + 1 < eventsWithMetadata.length ? eventsWithMetadata[index + 1].metadata.sequenceNumber : false;
    case 'at':
      return eventsWithMetadata[index].metadata.sequenceNumber;
    case 'before':
      return index > 0 ? eventsWithMetadata[index - 1].metadata.sequenceNumber : false;
  }
}
