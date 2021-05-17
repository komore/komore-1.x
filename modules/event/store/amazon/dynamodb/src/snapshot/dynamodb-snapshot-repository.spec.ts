import type { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { mock } from 'jest-mock-extended';
import type { DynamoDBSnapshotRepositoryConfiguration } from './dynamodb-snapshot-repository-configuration';
import { dynamoDBSnapshotRepository } from './dynamodb-snapshot-repository';

jest.mock('@aws-sdk/client-dynamodb', () => ({
  DynamoDBClient: jest.fn().mockImplementation(() => ({
    send: jest.fn()
  }))
}));

/**
 * DynamoDB snapshot repository specification
 */
describe('DynamoDB snapshot repository', () => {
  interface TestState {
    readonly testField: string;
  }

  const dynamoDBClient = mock<DynamoDBClient>();

  it('works', () => {
    given: 'DynamoDB snapshot repository configuration without attribute names';
    const dynamoDBSnapshotRepositoryConfigurationWithoutAttributes: DynamoDBSnapshotRepositoryConfiguration = {
      dynamoDBClient,
      tableName: 'TestTable'
    };
    when: 'creating a DynamoDB snapshot repository';
    const snapshotRepository = dynamoDBSnapshotRepository<TestState>(
      dynamoDBSnapshotRepositoryConfigurationWithoutAttributes
    );
  });
});
