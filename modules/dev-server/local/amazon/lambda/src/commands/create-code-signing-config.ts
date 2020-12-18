import { CreateCodeSigningConfigRequest, CreateCodeSigningConfigResponse } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Creates a code signing configuration
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_CreateCodeSigningConfig.html CreateCodeSigningConfig}
 */
export const createCodeSigningConfig: Command<
  CreateCodeSigningConfigRequest,
  CreateCodeSigningConfigResponse
> = throwUnimplementedCommand('CreateCodeSigningConfig');
