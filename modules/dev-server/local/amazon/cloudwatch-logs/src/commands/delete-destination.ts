import { DeleteDestinationRequest } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Deletes a destination
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDestination.html DeleteDestination}
 */
export const deleteDestination: Command<DeleteDestinationRequest, void> = throwUnimplementedCommand(
  'DeleteDestination'
);
