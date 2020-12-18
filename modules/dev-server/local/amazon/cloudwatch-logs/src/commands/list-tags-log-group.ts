import { ListTagsLogGroupResponse, ListTagsLogGroupRequest } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Lists the tags for a log group
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsLogGroup.html ListTagsLogGroup}
 */
export const listTagsLogGroup: Command<ListTagsLogGroupRequest, ListTagsLogGroupResponse> = throwUnimplementedCommand(
  'ListTagsLogGroup'
);
