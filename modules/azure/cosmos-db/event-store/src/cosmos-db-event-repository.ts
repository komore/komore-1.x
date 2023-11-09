import { type Event } from '@komore/event';
import { type EventRepository } from '@komore/event/store';

import { type CosmosDbEventRepositoryOptions } from './cosmos-db-event-repository-options';

/**
 * Creates a Cosmos DB event repository
 *
 * @param options Cosmos DB event repository options
 * @returns Cosmos DB event repository
 */
export function cosmosDbEventRepository<EventTypes extends Event<any, any>[]>(
  options: CosmosDbEventRepositoryOptions
): EventRepository<EventTypes> {
  const { cosmosDbClient: _, logger: _1 } = options;
  return {};
}
