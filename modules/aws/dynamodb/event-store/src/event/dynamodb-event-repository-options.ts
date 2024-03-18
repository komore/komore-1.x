import { type DynamoDBApiClient, type DynamoDBTableName } from '@komore/aws/dynamodb';
import { type EventType as GenericEventType } from '@komore/event';

import { type DynamoDBEventRepositoryAttributeNames } from './attribute/dynamodb-event-repository-attribute-names';

/**
 * DynamoDB event repository options
 */
export interface DynamoDBEventRepositoryOptions<EventType extends GenericEventType = GenericEventType> {
  /**
   * DynamoDB API client
   */
  readonly apiClient: DynamoDBApiClient;
  /**
   * List of attribute names used to map an event to a DynamoDB item
   */
  readonly attributeNames?: Partial<DynamoDBEventRepositoryAttributeNames>;
  /**
   * Whether to compress items
   */
  readonly compress?: boolean;
  /**
   * Event type
   */
  readonly eventType: EventType;
  /**
   * DynamoDB table name
   */
  readonly tableName: DynamoDBTableName;
}
