import {
  ListFunctionsByCodeSigningConfigRequest,
  ListFunctionsByCodeSigningConfigResponse
} from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Lists functions that use the specified code signing configuration
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctionsByCodeSigningConfig.html ListFunctionsByCodeSigningConfig}
 */
export const listFunctionsByCodeSigningConfig: Command<
  ListFunctionsByCodeSigningConfigRequest,
  ListFunctionsByCodeSigningConfigResponse
> = throwUnimplementedCommand('ListFunctionsByCodeSigningConfig');
