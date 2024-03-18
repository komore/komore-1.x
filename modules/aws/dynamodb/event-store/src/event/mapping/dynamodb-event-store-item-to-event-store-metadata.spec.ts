import { feature } from '@komore/testing';

import { dynamoDBEventStoreItemToEventStoreMetadata } from './dynamodb-event-store-item-to-event-store-metadata';

feature('DynamoDB event store item to event store metadata', () => {
  dynamoDBEventStoreItemToEventStoreMetadata;
});
