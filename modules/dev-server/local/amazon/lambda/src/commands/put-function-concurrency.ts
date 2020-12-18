import { Concurrency, PutFunctionConcurrencyRequest } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Sets the maximum number of simultaneous executions for a Lambda function
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionConcurrency.html PutFunctionConcurrency}
 */
export const putFunctionConcurrency: Command<PutFunctionConcurrencyRequest, Concurrency> = throwUnimplementedCommand(
  'PutFunctionConcurrency'
);
