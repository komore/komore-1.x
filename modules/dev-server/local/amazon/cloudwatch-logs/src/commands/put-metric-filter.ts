import { PutMetricFilterRequest } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Creates or updates a metric filter
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutMetricFilter.html PutMetricFilter}
 */
export const putMetricFilter: Command<PutMetricFilterRequest, void> = throwUnimplementedCommand(
  'PutMetricFilter'
);
