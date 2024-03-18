import { feature } from '@komore/testing';

import { dynamoDBEventStoreItemToEvent } from './dynamodb-event-store-item-to-event';

feature('DynamoDB event store item to event', () => {
  dynamoDBEventStoreItemToEvent;
});
