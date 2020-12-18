import { PutDestinationPolicyRequest } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Creates or updates a destination
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestinationPolicy.html PutDestinationPolicy}
 */
export const putDestinationPolicy: Command<PutDestinationPolicyRequest, void> = throwUnimplementedCommand(
  'PutDestinationPolicy'
);
