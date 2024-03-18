import { feature } from '@komore/testing';

import { type DynamoDBSnapshotRepositoryAttributeNames } from './dynamodb-snapshot-repository-attribute-names';
import { normalizeDynamoDBSnapshotRepositoryAttributeNames } from './normalize-dynamodb-snapshot-repository-attribute-names';

feature('Normalize DynamoDB snapshot repository attribute names', {
  'provides default attribute names'() {
    when: 'building DynamoDB snapshot repository attribute names without providing a list of attribute names';
    const dynamoDBSnapshotAttributeNames = normalizeDynamoDBSnapshotRepositoryAttributeNames();

    expect: 'the DynamoDB snapshot repository attribute names to use default attribute names';
    dynamoDBSnapshotAttributeNames.aggregateKey === 'AggregateKey';
    dynamoDBSnapshotAttributeNames.sequenceNumber === 'SequenceNumber';
    dynamoDBSnapshotAttributeNames.state === 'State';
    dynamoDBSnapshotAttributeNames.timestamp === 'Timestamp';
  },
  'uses the passed attribute names'() {
    given: 'a set of snapshot repository attribute names';
    const attributeNames: DynamoDBSnapshotRepositoryAttributeNames = {
      aggregateKey: 'TestAggregateKeyAttributeName',
      sequenceNumber: 'TestSequenceNumberAttributeName',
      state: 'TestStateAttributeName',
      timestamp: 'TestTimestampAttributeName',
    };

    when: 'building DynamoDB snapshot repository attribute names';
    const dynamoDBSnapshotAttributeNames = normalizeDynamoDBSnapshotRepositoryAttributeNames(attributeNames);

    expect: 'the DynamoDB snapshot repository attribute names to match the provided ones';
    dynamoDBSnapshotAttributeNames.aggregateKey === attributeNames.aggregateKey;
    dynamoDBSnapshotAttributeNames.sequenceNumber === attributeNames.sequenceNumber;
    dynamoDBSnapshotAttributeNames.state === attributeNames.state;
    dynamoDBSnapshotAttributeNames.timestamp === attributeNames.timestamp;
  },
});
