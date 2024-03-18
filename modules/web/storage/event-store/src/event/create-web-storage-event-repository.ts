import { type EventFromType, type EventType as GenericEventType } from '@komore/event';
import { type EventStoreEventRepository } from '@komore/event/store';
import { empty } from '@komore/reactive';

import { type WebStorageEventRepositoryOptions } from './web-storage-event-repository-options';

/**
 * Creates a web storage event repository
 *
 * @param repositoryOptions Web storage event repository options
 * @returns Web storage event repository
 */
export function createWebStorageEventRepository<EventType extends GenericEventType>(
  repositoryOptions: WebStorageEventRepositoryOptions<EventType>
): EventStoreEventRepository<EventFromType<EventType>> {
  const { storage: _ } = repositoryOptions;
  return {
    loadEvents: ({ aggregateKey: _a, sequenceStart: _s, sequenceEnd: _e }) => empty,
    storeEvents: ({ events: _e }) => empty,
  };
}
