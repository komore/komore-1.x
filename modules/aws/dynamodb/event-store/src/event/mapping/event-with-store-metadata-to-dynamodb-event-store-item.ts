import { type DynamoDBAttributeValue } from '@komore/aws/dynamodb';
import { type EventFromType, type EventType as GenericEventType } from '@komore/event';
import { type EventWithStoreMetadata } from '@komore/event/store';
import { type ReadonlyRecord } from '@komore/typescript';

import { type DynamoDBEventStoreItemToEventWithStoreMetadataOptions } from './dynamodb-event-store-item-to-event-with-store-metadata-options';

/**
 * Creates a function that returns a DynanoDB event store item, given an event with store metadata
 *
 * @param options Options
 * @returns Function that returns a DynamoDB event store item, given an event with store metadata
 */
export function eventWithStoreMetadataToDynamoDBEventStoreItem<EventType extends GenericEventType>(
  _options: DynamoDBEventStoreItemToEventWithStoreMetadataOptions<EventType>
): (
  eventWithMetadata: EventWithStoreMetadata<EventFromType<EventType>>
) => ReadonlyRecord<string, DynamoDBAttributeValue> {
  return ({ event: _e, metadata: _m }) => {
    return {};
  };
}
