import { DeleteFunctionConcurrencyRequest } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Removes a concurrent execution limit from a function
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionConcurrency.html DeleteFunctionConcurrency}
 */
export const deleteFunctionConcurrency: Command<
  DeleteFunctionConcurrencyRequest,
  void
> = throwUnimplementedCommand('DeleteFunctionConcurrency');
