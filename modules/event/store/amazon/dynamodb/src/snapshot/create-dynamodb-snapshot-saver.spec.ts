import { type DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { type Snapshot } from '@komore/event/store';
import { mock } from 'jest-mock-extended';
import { createDynamoDBSnapshotSaver } from './create-dynamodb-snapshot-saver';
import { type DynamoDBSnapshotAttributeNames } from './dynamodb-snapshot-attribute-names';

describe('Create DynamoDB snapshot saver', () => {
  interface TestState {
    readonly value: number;
  }

  const dynamoDBClient = mock<DynamoDBClient>();
  const tableName = 'TestTable';
  const attributeNames: DynamoDBSnapshotAttributeNames = {
    aggregateKey: 'TestAggregateKeyAttributeName',
    sequenceNumber: 'TestSequenceNumberAttributeName',
    state: 'TestStateAttributeName',
    timestamp: 'TestTimestampAttributeName'
  };

  beforeEach(() => {
    dynamoDBClient.send.mockReset();
  });

  it('creates a function that stores a snaphot', () => {
    given: 'a snapshot';
    const snapshot: Snapshot<TestState> = {
      aggregateKey: 'TestAggregateKey',
      sequenceNumber: 42,
      state: {
        value: 9
      },
      timestamp: new Date()
    };
    when: 'creating a DynamoDB snapshot write request mapper';
    const requestMapper = createDynamoDBSnapshotSaver<TestState>(dynamoDBClient, tableName, attributeNames);
    and: 'calling the request mapper';
    const request = requestMapper(snapshot);
    expect: 'the request to be properly built';
    expect(request.DeleteRequest).toBeUndefined();
    expect(request.PutRequest).toBeDefined();
    const item = request.PutRequest?.Item;
    expect(item).toBeDefined();
    expect(item?.[attributeNames.aggregateKey]).toBe({ S: snapshot.aggregateKey });
    expect(item?.[attributeNames.sequenceNumber]).toBe({ N: snapshot.sequenceNumber });
    expect(item?.[attributeNames.state]).toBe({ S: JSON.stringify(snapshot.state) });
    expect(item?.[attributeNames.timestamp]).toBe({ S: snapshot.timestamp.toISOString() });
  });
});
