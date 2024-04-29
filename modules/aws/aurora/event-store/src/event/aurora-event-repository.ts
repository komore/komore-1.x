import { type EventFromType, type EventType as GenericEventType } from '@komore/event';
import { type EventStoreEventRepository } from '@komore/event/store';

import { type AuroraEventRepositoryOptions } from './aurora-event-repository-options';

/**
 * Creates an Aurora event repository
 *
 * @param repositoryOptions Aurora event repository options
 * @returns Aurora event repository
 * @template EventType Event type
 */
export function auroraEventRepository<EventType extends GenericEventType>(
  repositoryOptions: AuroraEventRepositoryOptions<EventType>
): EventStoreEventRepository<EventFromType<EventType>> {
  const { apiClient: _a, databaseName: _d, eventType: _e, tableName: _t } = repositoryOptions;
  return {};
}
