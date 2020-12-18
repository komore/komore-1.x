import { GetFunctionConcurrencyRequest, GetFunctionConcurrencyResponse } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Retrieves a Lambda function's concurrency configuration
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionConcurrency.html GetFunctionConcurrency}
 */
export const getFunctionConcurrency: Command<
  GetFunctionConcurrencyRequest,
  GetFunctionConcurrencyResponse
> = throwUnimplementedCommand('GetFunctionConcurrency');
