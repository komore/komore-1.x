import { DescribeLogStreamsRequest, DescribeLogStreamsResponse } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Lists log streams within a log group
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogStreams.html DescribeLogStreams}
 */
export const describeLogStreams: Command<
  DescribeLogStreamsRequest,
  DescribeLogStreamsResponse
> = throwUnimplementedCommand('DescribeLogStreams');
