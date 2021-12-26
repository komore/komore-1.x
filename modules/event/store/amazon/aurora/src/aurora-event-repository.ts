import { type Event } from '@komore/event';
import { type EventRepository } from '@komore/event/store';
import { createAuroraClient } from '@komore/integration-amazon/aurora';
import { type AuroraEventRepositoryConfiguration } from './aurora-event-repository-configuration';

export function auroraEventRepository<EventTypes extends Event<string, Record<string, unknown>>[]>(
  configuration: AuroraEventRepositoryConfiguration
): EventRepository<EventTypes> {
  const auroraClient = configuration.client ?? createAuroraClient();
  const tableName = configuration.tableName;
  return {};
}
