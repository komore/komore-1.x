import { DescribeDestinationsRequest, DescribeDestinationsResponse } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Lists all destinations
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDestinations.html DescribeDestinations}
 */
export const describeDestinations: Command<
  DescribeDestinationsRequest,
  DescribeDestinationsResponse
> = throwUnimplementedCommand('DescribeDestinations');
