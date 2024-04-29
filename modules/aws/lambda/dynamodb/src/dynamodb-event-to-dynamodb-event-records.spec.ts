import { feature } from '@komore/testing';

import { dynamoDBEventToDynamoDBEventRecords } from './dynamodb-event-to-dynamodb-event-records';

feature('DynamoDB event to DynamoDB event records', () => {
  dynamoDBEventToDynamoDBEventRecords;
});
