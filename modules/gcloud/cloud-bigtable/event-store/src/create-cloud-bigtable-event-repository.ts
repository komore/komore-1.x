import { type Event } from '@komore/event';
import { type EventStoreEventRepository } from '@komore/event/store';

import { type CloudBigtableEventRepositoryOptions } from './cloud-bigtable-event-repository-options';

export function createCloudBigtableEventRepository<EventTypes extends Event<any, any>[]>(
  _repositoryOptions: CloudBigtableEventRepositoryOptions
): EventStoreEventRepository<EventTypes> {
  return {
    loadEvents,
    storeEvents,
  };
}
