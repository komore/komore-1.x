import { BatchWriteItemInput, BatchWriteItemOutput } from '@aws-sdk/client-dynamodb';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Writes the attributes of one or more items
 * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html BatchWriteItem}
 */
export const batchGetItem: Command<BatchWriteItemInput, BatchWriteItemOutput> = throwUnimplementedCommand('BatchWriteItem');
