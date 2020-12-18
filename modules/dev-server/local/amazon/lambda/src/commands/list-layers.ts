import { ListLayersRequest, ListLayersResponse } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Lists Lambda layers
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_ListLayers.html ListLayers}
 */
export const listLayers: Command<ListLayersRequest, ListLayersResponse> = throwUnimplementedCommand('ListLayers');
