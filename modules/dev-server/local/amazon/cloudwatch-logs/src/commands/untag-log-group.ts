import { UntagLogGroupRequest } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Untags a log group
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagLogGroup.html UntagLogGroup}
 */
export const untagLogGroup: Command<UntagLogGroupRequest, void> = throwUnimplementedCommand(
  'UntagLogGroup'
);
