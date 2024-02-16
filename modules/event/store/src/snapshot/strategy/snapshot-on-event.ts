import { type EventCreator, type EventFromCreator } from '@komore/event';
import { assert } from '@komore/runtime';
import { type TypeCreator } from '@komore/typescript';

import { type EventStoreSnapshotStrategy } from './event-store-snapshot-strategy';
import { type EventStoreSnapshotStrategySelectionType } from './event-store-snapshot-strategy-selection-type';
import { getAfterAtOrBeforeSequenceNumber } from './get-after-at-or-before-sequence-number';
import { getFirstOrLastSequenceNumber } from './get-first-or-last-sequence-number';
import { isFirstOrLastSelectionType } from './is-first-or-last-selection-type';

/**
 * Creates a snapshot strategy that triggers a snapshot creation around the occurence of a particular event
 *
 * @param eventCreatorsOrTypes List of event creators or types
 * @param selectionType Snapshot strategy selection type
 * @returns Snapshot strategy
 * @template SnapshotType Snapshot type
 * @template EventType Event type
 */
export function snapshotOnEvent<SnapshotType, EventCreatorType extends EventCreator<string, TypeCreator<any, any>>>(
  eventCreatorsOrTypes: ReadonlyArray<EventCreatorType | string>,
  selectionType: EventStoreSnapshotStrategySelectionType = 'last'
): EventStoreSnapshotStrategy<SnapshotType, EventFromCreator<EventCreatorType>> {
  assert(eventCreatorsOrTypes.length > 0, 'a snapshot on event strategy must have at least one event type specified');

  return eventsWithMetadata => {
    const index = eventsWithMetadata.findIndex(({ event }) =>
      eventCreatorsOrTypes.some(eventCreatorOrType => {
        const eventName = typeof eventCreatorOrType === 'function' ? eventCreatorOrType.name : eventCreatorOrType;
        return eventName === event.name;
      })
    );

    if (index === -1) {
      return false;
    }

    return isFirstOrLastSelectionType(selectionType)
      ? getFirstOrLastSequenceNumber(eventsWithMetadata, selectionType)
      : getAfterAtOrBeforeSequenceNumber(eventsWithMetadata, selectionType, index);
  };
}
