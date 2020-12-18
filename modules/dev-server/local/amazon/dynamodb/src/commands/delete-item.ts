import { DeleteItemInput, DeleteItemOutput } from '@aws-sdk/client-dynamodb';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Deletes an item from a DynamoDB table
 * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteItem.html DeleteItem}
 */
export const deleteItem: Command<DeleteItemInput, DeleteItemOutput> = throwUnimplementedCommand(
  'DeleteItem'
);
