import { PutSubscriptionFilterRequest } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Creates or updates a subscription filter
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutSubscriptionFilter.html PutSubscriptionFilter}
 */
export const putSubscriptionFilter: Command<PutSubscriptionFilterRequest, void> = throwUnimplementedCommand(
  'PutSubscriptionFilter'
);
