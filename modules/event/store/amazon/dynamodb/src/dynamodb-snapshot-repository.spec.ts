import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { mock } from 'jest-mock-extended';
import {
  DynamoDBSnapshotRepositoryConfiguration,
  DynamoDBSnapshotRepositoryConfigurationInit
} from './dynamodb-snapshot-repository-configuration';
import { DynamoDBSnapshotRepository } from './dynamodb-snapshot-repository';

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
  let dynamoDBSnapshotRepository: DynamoDBSnapshotRepository<TestState>;

  const dynamoDBClient = mock<DynamoDBClient>();
  const dynamoDBSnapshotRepositoryConfiguration: DynamoDBSnapshotRepositoryConfiguration = {
    dynamoDBClient,
    tableName: 'TestTable',
    attributeNames: {
      aggregateKey: 'Key',
      sequenceNumber: 'Sequence',
      state: 'Data',
      timestamp: 'Timestamp'
    }
  };

  beforeEach(() => {
    dynamoDBSnapshotRepository = new DynamoDBSnapshotRepository(dynamoDBSnapshotRepositoryConfiguration);
  });

  it('uses default configuration values', () => {
    // given: DynamoDB snapshot repository configuration without attribute names
    const dynamoDBSnapshotRepositoryConfigurationWithoutAttributes: DynamoDBSnapshotRepositoryConfigurationInit = {
      dynamoDBClient,
      tableName: 'TestTable'
    };
    // when: creating a DynamoDB snapshot repository
    dynamoDBSnapshotRepository = new DynamoDBSnapshotRepository(
      dynamoDBSnapshotRepositoryConfigurationWithoutAttributes
    );
    // then: the correct default attribute names are used
    const attributeNames = dynamoDBSnapshotRepository.configuration.attributeNames;
    expect(attributeNames?.aggregateKey).toBe(DynamoDBSnapshotRepository.DEFAULT_ATTRIBUTE_NAME_AGGREGATE_KEY);
    expect(attributeNames?.sequenceNumber).toBe(DynamoDBSnapshotRepository.DEFAULT_ATTRIBUTE_NAME_SEQUENCE_NUMBER);
    expect(attributeNames?.state).toBe(DynamoDBSnapshotRepository.DEFAULT_ATTRIBUTE_NAME_STATE);
    expect(attributeNames?.timestamp).toBe(DynamoDBSnapshotRepository.DEFAULT_ATTRIBUTE_NAME_TIMESTAMP);
  });

  it('works', () => {});
});
