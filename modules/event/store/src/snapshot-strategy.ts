import type { Event, EventWithMetadata } from '@komore/event';
import type { Snapshot } from './snapshot';

/**
 * Snapshot strategy
 *
 * A snapshot strategy is used to determine the behavior of the snapshot process, i.e. when a snapshot should be
 * created.
 *
 * @param eventsWithMetadata List of events with their metadata
 * @param state State
 * @param currentSnapshot Current snapshot, if any
 * @returns true if a snapshot should be created
 * @returns A sequence number if a snapshot should be created from a specific sequence number
 * @template S State type
 * @template E Event types
 */
export interface SnapshotStrategy<S, E extends Event<any, any>[]> {
  (eventsWithMetadata: ReadonlyArray<EventWithMetadata<E>>, state: S, currentSnapshot?: Snapshot<S>): boolean | number;
}
