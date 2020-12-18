import { ListCodeSigningConfigsRequest, ListCodeSigningConfigsResponse } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Lists code signing configurations
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_ListCodeSigningConfigs.html ListCodeSigningConfigs}
 */
export const listCodeSigningConfigs: Command<
  ListCodeSigningConfigsRequest,
  ListCodeSigningConfigsResponse
> = throwUnimplementedCommand('ListCodeSigningConfigs');
