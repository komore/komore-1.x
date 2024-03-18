import { type DynamoDBAttributeValue } from '@komore/aws/dynamodb';
import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Creates a function that returns a DynanoDB event store item, given an event with store metadata
 *
 * @param options Options
 * @returns Function that returns a DynamoDB event store item, given an event with store metadata
 */
export function eventWithStoreMetadataToDynamoDBEventStoreItem(
  options: DynamoDBEventStoreItemToEventOptions<EventType>
): (
  eventWithMetadata: EventWithStoreMetadata<EventFromType<EventType>>
) => ReadonlyRecord<string, DynamoDBAttributeValue> {
  return ({ event, metadata }) => {};
}
