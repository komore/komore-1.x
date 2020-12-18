import { PutDestinationRequest, PutDestinationResponse } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Creates or updates a destination
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestination.html PutDestination}
 */
export const putDestination: Command<PutDestinationRequest, PutDestinationResponse> = throwUnimplementedCommand(
  'PutDestination'
);
