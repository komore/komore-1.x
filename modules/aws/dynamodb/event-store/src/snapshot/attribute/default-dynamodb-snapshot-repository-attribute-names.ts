import { type DynamoDBSnapshotRepositoryAttributeNames } from './dynamodb-snapshot-repository-attribute-names';

/**
 * Default DynamoDB snapshot repository attribute names
 */
export const defaultDynamoDBSnapshotRepositoryAttributeNames: DynamoDBSnapshotRepositoryAttributeNames = {
  aggregateKey: 'AggregateKey',
  sequenceNumber: 'SequenceNumber',
  state: 'State',
  timestamp: 'Timestamp',
};
