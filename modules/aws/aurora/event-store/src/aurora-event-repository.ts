import { createAuroraClient } from '@komore/aws/aurora';
import { type Event } from '@komore/event';
import { type EventRepository } from '@komore/event/store';

import { type AuroraEventRepositoryConfiguration } from './aurora-event-repository-configuration';

export function auroraEventRepository<EventTypes extends Event<string, Record<string, unknown>>[]>(
  options: AuroraEventRepositoryConfiguration
): EventRepository<EventTypes> {
  const auroraClient = options.client ?? createAuroraClient();
  const tableName = options.tableName;
  return {};
}
