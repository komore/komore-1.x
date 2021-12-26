import { type DynamoDBSnapshotAttributeNames } from './dynamodb-snapshot-attribute-names';

const defaultAttributeNames = {
  aggregateKey: 'AggregateKey',
  sequenceNumber: 'SequenceNumber',
  state: 'State',
  timestamp: 'Timestamp'
};

/**
 * Builds the list of attribute names, providing default values when necessary
 * @param attributeNames Attribute names
 * @returns Attribute names
 */
export function buildDynamoDBSnapshotAttributeNames(
  attributeNames?: Partial<DynamoDBSnapshotAttributeNames>
): DynamoDBSnapshotAttributeNames {
  const aggregateKey = attributeNames?.aggregateKey ?? defaultAttributeNames.aggregateKey;
  const sequenceNumber = attributeNames?.sequenceNumber ?? defaultAttributeNames.sequenceNumber;
  const state = attributeNames?.state ?? defaultAttributeNames.state;
  const timestamp = attributeNames?.timestamp ?? defaultAttributeNames.timestamp;
  return {
    aggregateKey,
    sequenceNumber,
    state,
    timestamp
  };
}
