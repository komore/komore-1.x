import { PutFunctionCodeSigningConfigRequest, PutFunctionCodeSigningConfigResponse } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Updates the code signing configuration of a Lambda function
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionCodeSigningConfig.html PutFunctionCodeSigningConfig}
 */
export const putFunctionCodeSigningConfig: Command<
  PutFunctionCodeSigningConfigRequest,
  PutFunctionCodeSigningConfigResponse
> = throwUnimplementedCommand('PutFunctionCodeSigningConfig');
