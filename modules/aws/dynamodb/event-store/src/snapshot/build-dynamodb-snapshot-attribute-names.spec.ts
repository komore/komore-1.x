import { buildDynamoDBSnapshotAttributeNames } from './build-dynamodb-snapshot-attribute-names';
import { type DynamoDBSnapshotAttributeNames } from './dynamodb-snapshot-attribute-names';

describe('Build DynamoDB snapshot repository attribute names', () => {
  it('provides default attribute names', () => {
    when: 'building DynamoDB snapshot repository attribute names without providing a list of attribute names';
    const dynamoDBSnapshotAttributeNames = buildDynamoDBSnapshotAttributeNames();

    expect: 'the DynamoDB snapshot repository attribute names to use default attribute names';
    expect(dynamoDBSnapshotAttributeNames.aggregateKey).toBe('AggregateKey');
    expect(dynamoDBSnapshotAttributeNames.sequenceNumber).toBe('SequenceNumber');
    expect(dynamoDBSnapshotAttributeNames.state).toBe('State');
    expect(dynamoDBSnapshotAttributeNames.timestamp).toBe('Timestamp');
  });

  it('uses the passed attribute names', () => {
    given: 'a set of snapshot repository attribute names';
    const attributeNames: DynamoDBSnapshotAttributeNames = {
      aggregateKey: 'TestAggregateKeyAttributeName',
      sequenceNumber: 'TestSequenceNumberAttributeName',
      state: 'TestStateAttributeName',
      timestamp: 'TestTimestampAttributeName'
    };

    when: 'building DynamoDB snapshot repository attribute names';
    const dynamoDBSnapshotAttributeNames = buildDynamoDBSnapshotAttributeNames(attributeNames);

    expect: 'the DynamoDB snapshot repository attribute names to match the provided ones';
    expect(dynamoDBSnapshotAttributeNames.aggregateKey).toBe(attributeNames.aggregateKey);
    expect(dynamoDBSnapshotAttributeNames.sequenceNumber).toBe(attributeNames.sequenceNumber);
    expect(dynamoDBSnapshotAttributeNames.state).toBe(attributeNames.state);
    expect(dynamoDBSnapshotAttributeNames.timestamp).toBe(attributeNames.timestamp);
  });
});
