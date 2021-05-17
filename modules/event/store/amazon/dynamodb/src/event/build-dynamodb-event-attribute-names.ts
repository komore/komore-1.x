import type { DynamoDBEventAttributeNames } from './dynamodb-event-attribute-names';

const defaultAttributeNames = {
  aggregateKey: 'AggregateKey',
  eventData: 'EventData',
  eventType: 'EventType',
  sequenceNumber: 'SequenceNumber',
  timestamp: 'Timestamp'
};

/**
 * Builds the list of attribute names, providing default values when necessary
 * @param attributeNames Attribute names
 * @returns Attribute names
 */
export function buildDynamoDBSnapshotAttributeNames(
  attributeNames?: Partial<DynamoDBEventAttributeNames>
): DynamoDBEventAttributeNames {
  const aggregateKey = attributeNames?.aggregateKey ?? defaultAttributeNames.aggregateKey;
  const eventData = attributeNames?.eventData ?? defaultAttributeNames.eventData;
  const eventType = attributeNames?.eventType ?? defaultAttributeNames.eventType;
  const sequenceNumber = attributeNames?.sequenceNumber ?? defaultAttributeNames.sequenceNumber;
  const timestamp = attributeNames?.timestamp ?? defaultAttributeNames.timestamp;
  return {
    aggregateKey,
    eventData,
    eventType,
    sequenceNumber,
    timestamp
  };
}
