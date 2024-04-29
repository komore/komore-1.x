import { type DynamoDBAttributeValue } from '@komore/aws/dynamodb';
import { type EventFromType, type EventType as GenericEventType } from '@komore/event';
import { identity } from '@komore/functional';
import { type ReadonlyRecord } from '@komore/typescript';

import { dynamoDBEventStoreError } from '../../dynamodb-event-store.error';
import { type DynamoDBEventStoreItemToEventWithStoreMetadataOptions } from './dynamodb-event-store-item-to-event-with-store-metadata-options';

/**
 * Creates a function that returns an event, given a DynamoDB event store item
 *
 * @param options Options
 * @returns Function that returns an event, given a DynamoDB event store item
 */
export function dynamoDBEventStoreItemToEvent<EventType extends GenericEventType>(
  options: DynamoDBEventStoreItemToEventWithStoreMetadataOptions<EventType>
): (item: ReadonlyRecord<string, DynamoDBAttributeValue>) => EventFromType<EventType> {
  const { attributeNames: names, eventNameResolver = identity, eventType } = options;
  return item => {
    const eventNameString = item[names.eventName]?.S;
    if (eventNameString === undefined) {
      throw dynamoDBEventStoreError.missingEventAttribute({ attributeName: names.eventName });
    }

    const eventDataJson = item[names.eventData]?.S;
    if (eventDataJson === undefined) {
      throw dynamoDBEventStoreError.missingEventAttribute({ attributeName: names.eventData });
    }

    const eventName = eventNameResolver(eventNameString);
    const eventCreator = eventType[eventName];
    if (eventCreator === undefined) {
      throw dynamoDBEventStoreError.unknownEventName({ eventName });
    }

    try {
      const eventData = JSON.parse(eventDataJson);
      return eventCreator(eventData) as EventFromType<EventType>;
    } catch (e) {
      throw dynamoDBEventStoreError.invalidEventDataJson({ json: eventDataJson });
    }
  };
}
