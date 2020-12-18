import { CreateGlobalTableInput, CreateGlobalTableOutput } from '@aws-sdk/client-dynamodb';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Creates a global table
 * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateGlobalTable.html CreateGlobalTable}
 */
export const createGlobalTable: Command<CreateGlobalTableInput, CreateGlobalTableOutput> = throwUnimplementedCommand(
  'CreateGlobalTable'
);
