import { EventSourceMappingConfiguration, UpdateEventSourceMappingRequest } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Updates an event source mapping
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateEventSourceMapping.html UpdateEventSourceMapping}
 */
export const updateEventSourceMapping: Command<
  UpdateEventSourceMappingRequest,
  EventSourceMappingConfiguration
> = throwUnimplementedCommand('UpdateEventSourceMapping');
