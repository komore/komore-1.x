import { ListVersionsByFunctionRequest, ListVersionsByFunctionResponse } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Retrieves a list of versions for a Lambda function
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_ListVersionsByFunction.html ListVersionsByFunction}
 */
export const listVersionsByFunction: Command<
  ListVersionsByFunctionRequest,
  ListVersionsByFunctionResponse
> = throwUnimplementedCommand('ListVersionsByFunction');
