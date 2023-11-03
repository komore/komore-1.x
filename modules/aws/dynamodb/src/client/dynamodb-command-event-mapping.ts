import { type CommandName } from '@komore/command';
import { type EventName } from '@komore/event';
import { type ReadonlyRecord } from '@komore/typescript';

import { type dynamoDBCommand } from '../dynamodb.command';
import { type dynamoDBEvent } from '../dynamodb.event';

/**
 * DynamoDB command event mapping
 */
export const dynamoDBCommandEventMapping = {
  batchWriteItem: '',
  putItem: '',
  updateItem: 'itemUpdated',
} as const satisfies ReadonlyRecord<CommandName<typeof dynamoDBCommand>, EventName<typeof dynamoDBEvent>>;
