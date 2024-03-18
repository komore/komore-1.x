import { type EventType as GenericEventType } from '@komore/event';

import { type DynamoDBEventRepositoryAttributeNames } from '../attribute/dynamodb-event-repository-attribute-names';

/**
 * DynamoDB event store item to event with store metadata options
 *
 * @template EventType Event type
 */
export interface DynamoDBEventStoreItemToEventWithStoreMetadataOptions<
  EventType extends GenericEventType = GenericEventType,
> {
  /**
   * Attribute names
   */
  readonly attributeNames: DynamoDBEventRepositoryAttributeNames;
  /**
   * Event name resolver
   *
   * @param eventName Stored event name
   * @returns Event name
   * @default identity
   */
  readonly eventNameResolver?: (eventName: string) => keyof EventType & string;
  /**
   * Event type
   */
  readonly eventType: EventType;
}
