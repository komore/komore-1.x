import { type Event } from '@komore/event';
import { type EventRepository } from '@komore/event/store';
import { createCosmosDBClient } from '@komore/integration-azure/cosmos-db';
import { type CosmosDBEventRepositoryConfiguration } from './cosmos-db-event-repository-configuration';

export function cosmosDBEventRepository<EventTypes extends Event<any, any>[]>(configuration: CosmosDBEventRepositoryConfiguration): EventRepository<EventTypes> {
  const cosmosDBClient = createCosmosDBClient();
  return {
    
  };
}
