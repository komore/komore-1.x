import { FunctionEventInvokeConfig, PutFunctionEventInvokeConfigRequest } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Configures a Lambda function, version or alias for asynchronous invocations
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionEventInvokeConfig.html PutFunctionEventInvokeConfig}
 */
export const putFunctionEventInvokeConfig: Command<
  PutFunctionEventInvokeConfigRequest,
  FunctionEventInvokeConfig
> = throwUnimplementedCommand('PutFunctionEventInvokeConfig');
