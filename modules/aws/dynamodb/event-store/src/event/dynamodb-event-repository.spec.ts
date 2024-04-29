import { asDynamoDBTableName } from '@komore/aws/dynamodb';
import { createTestDynamoDBApiClient } from '@komore/aws/dynamodb/testing';
import { type Event } from '@komore/event';
import { type EventStoreEventRepository } from '@komore/event/store';
import { feature } from '@komore/testing';

import { dynamoDBEventRepository } from './dynamodb-event-repository';
import { type DynamoDBEventRepositoryOptions } from './dynamodb-event-repository-options';

feature('DynamoDB event repository', () => {
  let repository: EventStoreEventRepository<Event>;

  const apiClient = createTestDynamoDBApiClient();
  const tableName = asDynamoDBTableName('TestTable');
  const dynamoDBEventOptions: DynamoDBEventRepositoryOptions = {
    apiClient,
    tableName,
    attributeNames: {
      aggregateKey: 'Key',
      eventData: 'Data',
      eventName: 'Name',
      sequenceNumber: 'Sequence',
      timestamp: 'Timestamp',
    },
  };

  beforeEach(() => {
    mockedDynamoDBClient.mockClear();
    repository = dynamoDBEventRepository(dynamoDBEventOptions);
    repository;
  });
});
