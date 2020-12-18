import { DescribeQueriesRequest, DescribeQueriesResponse } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Lists queries
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueries.html DescribeQueries}
 */
export const describeQueries: Command<DescribeQueriesRequest, DescribeQueriesResponse> = throwUnimplementedCommand(
  'DescribeQueries'
);
