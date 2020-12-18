import { DeleteMetricFilterRequest } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Deletes a metric filter
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteMetricFilter.html DeleteMetricFilter}
 */
export const deleteMetricFilter: Command<DeleteMetricFilterRequest, void> = throwUnimplementedCommand(
  'DeleteMetricFilter'
);
