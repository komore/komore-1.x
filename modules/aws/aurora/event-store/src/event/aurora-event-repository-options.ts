import { type EventType as GenericEventType } from '@komore/event';
import { type AuroraApiClient, type AuroraDatabaseName } from '@komore/aws/aurora';

/**
 * Aurora event repository options
 *
 * @template EventType Event type
 */
export interface AuroraEventRepositoryOptions<EventType extends GenericEventType> {
  /**
   * Aurora API client
   */
  readonly apiClient: AuroraApiClient;
  /**
   * Aurora database name
   */
  readonly databaseName: AuroraDatabaseName;
  /**
   * Event type
   */
  readonly eventType: EventType;
  /**
   * Table name
   */
  readonly tableName: string;
}
