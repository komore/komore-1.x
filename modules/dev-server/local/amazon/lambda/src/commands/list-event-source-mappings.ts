import { ListEventSourceMappingsRequest, ListEventSourceMappingsResponse } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Lists event source mappings
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_ListEventSourceMappings.html ListEventSourceMappings}
 */
export const listEventSourceMappings: Command<
  ListEventSourceMappingsRequest,
  ListEventSourceMappingsResponse
> = throwUnimplementedCommand('ListEventSourceMappings');
