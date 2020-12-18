import { TagLogGroupRequest } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Tags a log group
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagLogGroup.html TagLogGroup}
 */
export const tagLogGroup: Command<TagLogGroupRequest, void> = throwUnimplementedCommand(
  'TagLogGroup'
);
