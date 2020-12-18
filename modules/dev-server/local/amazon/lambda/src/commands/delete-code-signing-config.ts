import { DeleteCodeSigningConfigRequest, DeleteCodeSigningConfigResponse } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Deletes a code signing configuration
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteCodeSigningConfig.html DeleteCodeSigningConfig}
 */
export const deleteCodeSigningConfig: Command<
  DeleteCodeSigningConfigRequest,
  DeleteCodeSigningConfigResponse
> = throwUnimplementedCommand('DeleteCodeSigningConfig');
