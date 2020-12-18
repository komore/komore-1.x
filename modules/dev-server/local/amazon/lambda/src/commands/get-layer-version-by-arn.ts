import { GetLayerVersionByArnRequest, GetLayerVersionResponse } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Retrieves information about a Lambda layer, by ARN
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_GetLayerVersionByArn.html GetLayerVersionByArn}
 */
export const getLayerVersionByArn: Command<GetLayerVersionByArnRequest, GetLayerVersionResponse> = throwUnimplementedCommand(
  'GetLayerVersionByArn'
);
