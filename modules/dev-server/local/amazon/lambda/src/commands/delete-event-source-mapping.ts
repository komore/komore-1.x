import { DeleteEventSourceMappingRequest, EventSourceMappingConfiguration } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Deletes an event source mapping
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteEventSourceMapping.html DeleteEventSourceMapping}
 */
export const deleteEventSourceMapping: Command<
  DeleteEventSourceMappingRequest,
  EventSourceMappingConfiguration
> = throwUnimplementedCommand('DeleteEventSourceMapping');
