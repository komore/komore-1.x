import { type DynamoDBAttributeValue } from '@komore/aws/dynamodb';
import { type EventType as GenericEventType } from '@komore/event';
import { type EventStoreMetadata } from '@komore/event/store';
import { type ReadonlyRecord } from '@komore/typescript';

import { dynamoDBEventStoreError } from '../../dynamodb-event-store.error';
import { type DynamoDBEventStoreItemToEventWithStoreMetadataOptions } from './dynamodb-event-store-item-to-event-with-store-metadata-options';

/**
 * Creates a function that returns event store metadata, given a DynamoDB event store item
 *
 * @param options Options
 * @returns Function that returns event store metadata, given a DynamoDB event store item
 */
export function dynamoDBEventStoreItemToEventStoreMetadata<EventType extends GenericEventType>(
  options: DynamoDBEventStoreItemToEventWithStoreMetadataOptions<EventType>
): (item: ReadonlyRecord<string, DynamoDBAttributeValue>) => EventStoreMetadata {
  const { attributeNames: names } = options;
  return item => {
    const aggregateKey = item[names.aggregateKey]?.S;
    const eventDataJson = item[names.eventData]?.S;
    const sequenceNumberString = item[names.sequenceNumber]?.N;
    const timestampString = item[names.timestamp]?.S;

    if (aggregateKey === undefined) {
      throw dynamoDBEventStoreError.missingEventAttribute({ attributeName: names.aggregateKey });
    }

    if (eventDataJson === undefined) {
      throw dynamoDBEventStoreError.missingEventAttribute({ attributeName: names.eventData });
    }

    if (sequenceNumberString === undefined) {
      throw dynamoDBEventStoreError.missingEventAttribute({ attributeName: names.sequenceNumber });
    }

    if (timestampString === undefined) {
      throw dynamoDBEventStoreError.missingEventAttribute({ attributeName: names.timestamp });
    }

    const sequenceNumber = Number(sequenceNumberString);
    const size = eventDataJson.length;
    const timestamp = Temporal.Instant.fromEpochMilliseconds(Number(timestampString));

    return {
      aggregateKey,
      sequenceNumber,
      size,
      timestamp,
    };
  };
}
