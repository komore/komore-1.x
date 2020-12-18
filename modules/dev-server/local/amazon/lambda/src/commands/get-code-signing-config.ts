import { GetCodeSigningConfigRequest, GetCodeSigningConfigResponse } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Retrieves a code signing configuration
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_GetCodeSigningConfig.html GetCodeSigningConfig}
 */
export const getCodeSigningConfig: Command<
  GetCodeSigningConfigRequest,
  GetCodeSigningConfigResponse
> = throwUnimplementedCommand('GetCodeSigningConfig');
