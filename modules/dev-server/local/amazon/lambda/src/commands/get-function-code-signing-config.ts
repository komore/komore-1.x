import { GetFunctionCodeSigningConfigRequest, GetFunctionCodeSigningConfigResponse } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Retrieves a Lambda function's code signing configuration
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionCodeSigningConfig.html GetFunctionCodeSigningConfig}
 */
export const getFunctionCodeSigningConfig: Command<
  GetFunctionCodeSigningConfigRequest,
  GetFunctionCodeSigningConfigResponse
> = throwUnimplementedCommand('GetFunctionCodeSigningConfig');
