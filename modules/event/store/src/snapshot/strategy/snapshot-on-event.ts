import * as assert from 'assert';
import { Event } from './event';
import { EventCreator } from './event-creator';
import { SnapshotStrategy } from './snapshot-strategy';
import {
  getAfterAtOrBeforeSequenceNumber,
  getFirstOrLastSequenceNumber,
  isFirstOrLastSelectionType
} from './snapshot-strategy-helpers';
import { SnapshotStrategySelectionType } from './snapshot-strategy-selection-type';

/**
 * Creates a snapshot strategy that triggers a snapshot creation around the occurence of a particular event
 * @param eventCreatorsOrTypes List of event creators or types
 * @param selectionType Snapshot strategy selection type
 * @returns Snapshot strategy
 * @template S State type
 * @template E Event type
 */
export function snapshotOnEvent<S, E extends Event<any, any>[]>(
  eventCreatorsOrTypes: ReadonlyArray<EventCreator<E[number]> | string>,
  selectionType: SnapshotStrategySelectionType = SnapshotStrategySelectionType.LAST
): SnapshotStrategy<S, E> {
  assert(eventCreatorsOrTypes.length > 0, 'a snapshot on event strategy must have at least one event type specified');

  return eventsWithMetadata => {
    const index = eventsWithMetadata.findIndex(({ event }) =>
      eventCreatorsOrTypes.some(eventCreatorOrType => {
        const eventType = typeof eventCreatorOrType === 'function' ? eventCreatorOrType.type : eventCreatorOrType;
        return eventType === event.type;
      })
    );

    if (index === -1) {
      return false;
    }

    if (isFirstOrLastSelectionType(selectionType)) {
      return getFirstOrLastSequenceNumber(eventsWithMetadata, selectionType);
    } else {
      return getAfterAtOrBeforeSequenceNumber(eventsWithMetadata, selectionType, index);
    }
  };
}
