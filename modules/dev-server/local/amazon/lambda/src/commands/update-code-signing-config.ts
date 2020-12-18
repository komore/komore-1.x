import { UpdateCodeSigningConfigRequest, UpdateCodeSigningConfigResponse } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Updates a code signing configuration
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateCodeSigningConfig.html UpdateCodeSigningConfig}
 */
export const updateCodeSigningConfig: Command<
  UpdateCodeSigningConfigRequest,
  UpdateCodeSigningConfigResponse
> = throwUnimplementedCommand('UpdateCodeSigningConfig');
