import { EventSourceMappingConfiguration, GetEventSourceMappingRequest } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Retrieves an event source mapping configuration
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_GetEventSourceMapping.html GetEventSourceMapping}
 */
export const getEventSourceMapping: Command<
  GetEventSourceMappingRequest,
  EventSourceMappingConfiguration
> = throwUnimplementedCommand('GetEventSourceMapping');
