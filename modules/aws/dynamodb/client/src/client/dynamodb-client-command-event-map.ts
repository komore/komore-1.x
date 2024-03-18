import { createClientCommandEventMap } from '@komore/client';

import { type dynamoDBCommand } from '../dynamodb.command';
import { type dynamoDBEvent } from '../dynamodb.event';

/**
 * DynamoDB client command-to-event map
 */
export const dynamoDBClientCommandEventMap = createClientCommandEventMap<
  typeof dynamoDBCommand,
  typeof dynamoDBEvent
>()({
  batchWriteItem: '',
  putItem: '',
  updateItem: 'itemUpdated',
});
