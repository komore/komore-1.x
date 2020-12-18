import { DescribeLogGroupsRequest, DescribeLogGroupsResponse } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Lists log groups
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogGroups.html DescribeLogGroups}
 */
export const describeLogGroups: Command<
  DescribeLogGroupsRequest,
  DescribeLogGroupsResponse
> = throwUnimplementedCommand('DescribeLogGroups');
