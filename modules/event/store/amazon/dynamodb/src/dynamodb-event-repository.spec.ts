import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import type { Event } from '@komore/event';
import { mocked } from 'ts-jest/utils';
import type { DynamoDBEventRepositoryConfiguration } from './dynamodb-event-repository-configuration';
import { DynamoDBEventRepository } from './dynamodb-event-repository';

jest.mock('@aws-sdk/client-dynamodb', () => ({
  DynamoDBClient: jest.fn().mockImplementation(() => ({
    send: jest.fn()
  }))
}));

/**
 * DynamoDB event repository specification
 */
describe('DynamoDB event repository', () => {
  let dynamoDBEventRepository: DynamoDBEventRepository<Event>;

  const mockedDynamoDBClient = mocked(DynamoDBClient, true);
  const dynamoDBEventConfiguration: DynamoDBEventRepositoryConfiguration = {
    dynamoDBClient: mockedDynamoDBClient,
    tableName: 'TestTable',
    attributeNames: {
      aggregateKey: 'Key',
      eventData: 'Data',
      eventType: 'Type',
      sequenceNumber: 'Sequence',
      timestamp: 'Timestamp'
    }
  };

  beforeEach(() => {
    mockedDynamoDBClient.mockClear();
    dynamoDBEventRepository = new DynamoDBEventRepository(dynamoDBEventConfiguration);
  });

  it('builds a DynamoDB client with the correct settings', () => {
    // expect: the DynamoDB client constructor to have been called with the correct settings
    expect(mockedDynamoDBClient).toHaveBeenCalledTimes(1);
    expect(mockedDynamoDBClient).toHaveBeenCalledWith({
      credentials: dynamoDBEventConfiguration.credentials,
      region: dynamoDBEventConfiguration.region
    });
  });
});
