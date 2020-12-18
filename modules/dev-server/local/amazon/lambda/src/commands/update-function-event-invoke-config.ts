import { FunctionEventInvokeConfig, UpdateFunctionEventInvokeConfigRequest } from '@aws-sdk/client-lambda';
import { throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';
import { Command } from '@komore/dev-server-local-amazon/service';

/**
 * Updates the configuration for asynchronous invocation of a function, version or alias
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionEventInvokeConfig.html UpdateFunctionEventInvokeConfig}
 */
export const updateFunctionEventInvokeConfig: Command<
  UpdateFunctionEventInvokeConfigRequest,
  FunctionEventInvokeConfig
> = throwUnimplementedCommand('UpdateFunctionEventInvokeConfig');
