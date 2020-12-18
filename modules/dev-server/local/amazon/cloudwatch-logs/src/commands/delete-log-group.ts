import { DeleteLogGroupRequest } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Deletes a log group
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteLogGroup.html DeleteLogGroup}
 */
export const deleteLogGroup: Command<DeleteLogGroupRequest, void> = throwUnimplementedCommand(
  'DeleteLogGroup'
);
