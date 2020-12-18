import { DeleteFunctionCodeSigningConfigRequest } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Deletes a Lambda function's code signing configuration
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionCodeSigningConfig.html DeleteFunctionCodeSigningConfig}
 */
export const deleteFunctionCodeSigningConfig: Command<
  DeleteFunctionCodeSigningConfigRequest,
  void
> = throwUnimplementedCommand('DeleteFunctionCodeSigningConfig');
