import { ListLayerVersionsRequest, ListLayerVersionsResponse } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Lists the versions of a Lambda layer
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_ListLayerVersions.html ListLayerVersions}
 */
export const listLayerVersions: Command<
  ListLayerVersionsRequest,
  ListLayerVersionsResponse
> = throwUnimplementedCommand('ListLayerVersions');
