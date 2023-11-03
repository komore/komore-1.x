import { type Event, type EventWithMetadata } from '@komore/event';

import { type EventStoreSnapshot } from '../event-store-snapshot';

/**
 * Event store snapshot strategy
 *
 * An event store snapshot strategy is used to determine the behavior of the snapshot process, i.e. when a snapshot
 * should be created.
 *
 * @param eventsWithMetadata List of events with their metadata
 * @param state State
 * @param currentSnapshot Current snapshot, if any
 * @returns true if a snapshot should be created
 * @returns A sequence number if a snapshot should be created from a specific sequence number
 * @template AggregateType Aggregate type
 * @template E Event types
 */
export interface EventStoreSnapshotStrategy<
  AggregateType,
  E extends Event<string, Record<string, unknown> | undefined>[],
> {
  (
    eventsWithMetadata: ReadonlyArray<EventWithMetadata<E>>,
    state: AggregateType,
    currentSnapshot?: EventStoreSnapshot<AggregateType>
  ): boolean | number;
}
