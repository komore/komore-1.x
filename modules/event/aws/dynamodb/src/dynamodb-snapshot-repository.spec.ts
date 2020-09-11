import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { mocked } from 'ts-jest/utils';
import { DynamoDBSnapshotRepository, DynamoDBSnapshotRepositoryConfiguration } from './dynamodb-snapshot-repository';

jest.mock('@aws-sdk/client-dynamodb', () => ({
  DynamoDBClient: jest.fn().mockImplementation(() => ({
    send: jest.fn()
  }))
}));

type TestState = {
  testField: string;
};

/**
 * DynamoDB snapshot repository specification
 */
describe('DynamoDB snapshot repository', () => {
  let dynamoDBEventRepository: DynamoDBSnapshotRepository<TestState>;

  const mockedDynamoDBClient = mocked(DynamoDBClient, true);
  const dynamoDBSnapshotRepositoryConfiguration: DynamoDBSnapshotRepositoryConfiguration = {
    tableName: 'TestTable',
    attributeNames: {
      aggregateKey: 'Key',
      sequenceNumber: 'Sequence',
      state: 'Data',
      timestamp: 'Timestamp'
    },
    credentials: () => Promise.resolve({
      accessKeyId: 'dynamodb-snapshot-repository-access-key-id',
      secretAccessKey: 'dynamodb-snapshot-repository-secret-access-key'
    }),
    region: () => Promise.resolve('dynamodb-snapshot-repository-region')
  };

  beforeEach(() => {
    dynamoDBEventRepository = new DynamoDBSnapshotRepository(dynamoDBSnapshotRepositoryConfiguration);
  });

  it('works', () => {

  });
});
