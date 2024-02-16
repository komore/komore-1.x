import { type GenericEvent } from '@komore/event';
import { type EventStoreEventRepository } from '@komore/event/store';
import { MemoryEventStoreEventRepositoryOptions } from './memory-event-store-event-repository-options';

/**
 * Creates a memory event store event repository
 *
 * @param repositoryOptions Memory event store event repository options
 * @returns Memory event store event repository
 * @template EventType Event type
 */
export function createMemoryEventStoreEventRepository<EventType extends GenericEvent>(
  repositoryOptions: MemoryEventStoreEventRepositoryOptions
): EventStoreEventRepository<EventType> {
  return {
    loadEvents,
    storeEvents,
  };
}
