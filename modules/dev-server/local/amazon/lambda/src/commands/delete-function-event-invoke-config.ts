import { DeleteFunctionEventInvokeConfigRequest } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Removes the configuration for asynchronous invocation for a function, version or alias
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionEventInvokeConfig.html DeleteFunctionEventInvokeConfig}
 */
export const deleteFunctionEventInvokeConfig: Command<
  DeleteFunctionEventInvokeConfigRequest,
  void
> = throwUnimplementedCommand('DeleteFunctionEventInvokeConfig');
