import { GetLayerVersionRequest, GetLayerVersionResponse } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Retrieves information about a Lambda layer
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_GetLayerVersion.html GetLayerVersion}
 */
export const getLayerVersion: Command<GetLayerVersionRequest, GetLayerVersionResponse> = throwUnimplementedCommand(
  'GetLayerVersion'
);
