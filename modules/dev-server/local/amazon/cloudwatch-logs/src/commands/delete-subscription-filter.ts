import { DeleteSubscriptionFilterRequest } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Deletes a subscription filter
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteSubscriptionFilter.html DeleteSubscriptionFilter}
 */
export const deleteSubscriptionFilter: Command<DeleteSubscriptionFilterRequest, void> = throwUnimplementedCommand(
  'DeleteSubscriptionFilter'
);
