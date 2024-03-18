import { type DynamoDBAttributeValue } from '@komore/aws/dynamodb';
import { type EventFromType, type EventType as GenericEventType } from '@komore/event';
import { type EventWithStoreMetadata } from '@komore/event/store';
import { type ReadonlyRecord } from '@komore/typescript';

import { type DynamoDBEventStoreItemToEventOptions } from './dynamodb-event-store-item-to-event-options';
import { dynamoDBEventStoreItemToEvent } from './dynamodb-event-store-item-to-event';
import { dynamoDBEventStoreItemToEventStoreMetadata } from './dynamodb-event-store-item-to-event-store-metadata';

/**
 * Creates a function that returns an event, given a DynamoDB event store item
 *
 * @param options Options
 * @returns Function that returns an event, given a DynamoDB event store item
 */
export function dynamoDBEventStoreItemToEventWithStoreMetadata<EventType extends GenericEventType>(
  options: DynamoDBEventStoreItemToEventOptions<EventType>
): (item: ReadonlyRecord<string, DynamoDBAttributeValue>) => EventWithStoreMetadata<EventFromType<EventType>> {
  const toEvent = dynamoDBEventStoreItemToEvent(options);
  const toMetadata = dynamoDBEventStoreItemToEventStoreMetadata(options);
  return item => {
    const event = toEvent(item);
    const metadata = toMetadata(item);
    return {
      event,
      metadata,
    };
  };
}
