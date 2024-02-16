import { type GenericEvent } from '@komore/event';
import { assert } from '@komore/runtime';

import { type EventStoreSnapshotStrategy } from './event-store-snapshot-strategy';
import { type EventStoreSnapshotStrategySelectionType } from './event-store-snapshot-strategy-selection-type';
import { getAfterAtOrBeforeSequenceNumber } from './get-after-at-or-before-sequence-number';
import { getFirstOrLastSequenceNumber } from './get-first-or-last-sequence-number';
import { isFirstOrLastSelectionType } from './is-first-or-last-selection-type';

/**
 * Creates a snapshot strategy that triggers a snapshot creation around a delay threshold being reached
 *
 * @param duration Minimum duration required before a snapshot should be created
 * @param selectionType Snapshot strategy selection type
 * @returns Snapshot strategy
 * @template SnapshotType Snapshot type
 * @template EventType Event types
 */
export function snapshotOnDelay<SnapshotType, EventType extends GenericEvent>(
  duration: Temporal.Duration,
  selectionType: EventStoreSnapshotStrategySelectionType = 'last'
): EventStoreSnapshotStrategy<SnapshotType, EventType> {
  assert(
    duration.total({ unit: 'milliseconds' }) > 0,
    'a snapshot on delay strategy must have a threshold strictly greater than 0 milliseconds'
  );

  return (eventsWithMetadata, _, currentSnapshot) => {
    const firstEvent = eventsWithMetadata[0];
    const lastEvent = eventsWithMetadata[eventsWithMetadata.length - 1] as (typeof eventsWithMetadata)[number];
    const earliestTimestamp = currentSnapshot?.timestamp ?? firstEvent.metadata.timestamp;
    const latestTimestamp = lastEvent.metadata.timestamp;
    const maximumDelay = earliestTimestamp.until(latestTimestamp);

    if (Temporal.Duration.compare(duration, maximumDelay) < 0) {
      // TODO: ^ @komore/temporal function
      return false;
    }

    if (isFirstOrLastSelectionType(selectionType)) {
      return getFirstOrLastSequenceNumber(eventsWithMetadata, selectionType);
    } else {
      let i: number;

      for (i = 0; i !== eventsWithMetadata.length; ++i) {
        // TODO: avoid cast
        const eventWithMetadata = eventsWithMetadata[i] as (typeof eventsWithMetadata)[number];
        const delay = earliestTimestamp.until(eventWithMetadata.metadata.timestamp);
        if (Temporal.Duration.compare(duration, delay) >= 0) {
          break;
        }
      }

      return getAfterAtOrBeforeSequenceNumber(eventsWithMetadata, selectionType, i);
    }
  };
}
