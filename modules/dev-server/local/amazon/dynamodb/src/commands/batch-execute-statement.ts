import { BatchExecuteStatementInput, BatchExecuteStatementOutput } from '@aws-sdk/client-dynamodb';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Batches read or write operations
 * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchExecuteStatement.html BatchExecuteStatement}
 */
export const batchExecuteStatement: Command<
  BatchExecuteStatementInput,
  BatchExecuteStatementOutput
> = throwUnimplementedCommand('BatchExecuteStatement');
