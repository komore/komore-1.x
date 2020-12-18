import { ListFunctionEventInvokeConfigsRequest, ListFunctionEventInvokeConfigsResponse } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Lists configuration for asynchronous invocation of a Lambda function
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctionEventInvokeConfigs.html ListFunctionEventInvokeConfigs}
 */
export const listFunctionEventInvokeConfigs: Command<
  ListFunctionEventInvokeConfigsRequest,
  ListFunctionEventInvokeConfigsResponse
> = throwUnimplementedCommand('ListFunctionEventInvokeConfigs');
