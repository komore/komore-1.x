import { type GenericEvent } from '@komore/event';

import { type EventWithStoreMetadata } from '../../metadata/event-with-store-metadata';

import { type EventStoreSnapshotStrategySelectionType } from './event-store-snapshot-strategy-selection-type';

/**
 * Returns an event sequence number from a list of events and an index for `after`, `at` and `before` selection types
 *
 * @param events List of events
 * @param selectionType Selection type
 * @param index Index where the base strategy condition was met
 * @returns Sequence number
 * @template EventType Event type
 * @private
 */
export function getAfterAtOrBeforeSequenceNumber<EventType extends GenericEvent>(
  eventsWithMetadata: readonly [EventWithStoreMetadata<EventType>, ...ReadonlyArray<EventWithStoreMetadata<EventType>>],
  selectionType: Extract<EventStoreSnapshotStrategySelectionType, 'after' | 'at' | 'before'>,
  index: number
): number | false {
  switch (selectionType) {
    case 'after':
      return eventsWithMetadata[index + 1]?.metadata.sequenceNumber ?? false;
    case 'at':
      return eventsWithMetadata[index]?.metadata.sequenceNumber ?? false;
    case 'before':
      return eventsWithMetadata[index - 1]?.metadata.sequenceNumber ?? false;
  }
}
