import { BatchGetItemInput, BatchGetItemOutput } from '@aws-sdk/client-dynamodb';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Retrieves the attributes of one or more items
 * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html BatchGetItem}
 */
export const batchGetItem: Command<BatchGetItemInput, BatchGetItemOutput> = throwUnimplementedCommand('BatchGetItem');
