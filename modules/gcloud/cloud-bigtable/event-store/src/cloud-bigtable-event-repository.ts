import { type Event } from '@komore/event';
import { type EventRepository } from '@komore/event/store';
import { createCloudBigTableClient } from '@komore/integration-google/cloud-bigtable';
import { type CloudBigTableEventRepositoryConfiguration } from './cloud-bigtable-event-repository-configuration';

export function cloudBigTableEventRepository<EventTypes extends Event<any, any>[]>(configuration: CloudBigTableEventRepositoryConfiguration): EventRepository<EventTypes> {
  const cloudBigTableClient = createCloudBigTableClient();
  return {
    
  };
}
