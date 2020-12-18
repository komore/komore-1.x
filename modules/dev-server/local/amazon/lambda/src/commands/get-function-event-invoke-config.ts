import { FunctionEventInvokeConfig, GetFunctionEventInvokeConfigRequest } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Retrieves a Lambda function's asynchronous invocation configuration
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionEventInvokeConfig.html GetFunctionEventInvokeConfig}
 */
export const getFunctionEventInvokeConfig: Command<
  GetFunctionEventInvokeConfigRequest,
  FunctionEventInvokeConfig
> = throwUnimplementedCommand('GetFunctionEventInvokeConfig');
