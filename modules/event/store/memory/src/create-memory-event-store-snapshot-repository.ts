import { type GenericEvent } from '@komore/event';
import { type EventStoreEventRepository } from '@komore/event/store';

import { type MemoryEventStoreSnapshotRepositoryOptions } from './memory-event-store-snapshot-repository-options';

/**
 * Creates a memory event store snapshot repository
 *
 * @param repositoryOptions Memory event store snapshot repository options
 * @returns Memory event store snapshot repository
 * @template EventType Event type
 */
export function createMemoryEventStoreSnapshotRepository<EventType extends GenericEvent>(
  repositoryOptions: MemoryEventStoreSnapshotRepositoryOptions
): EventStoreEventRepository<EventType> {
  return {
    loadEvents,
    storeEvents,
  };
}
