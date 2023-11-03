import { type CommandHandler } from '@komore/command';

import { type DynamoDBCommandType } from './dynamodb.command';

/**
 * DynamoDB command handler
 */
export type DynamoDBCommandHandler = CommandHandler<DynamoDBCommandType>;
