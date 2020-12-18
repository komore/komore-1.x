import { DescribeResourcePoliciesRequest, DescribeResourcePoliciesResponse } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Lists resource policies
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeResourcePolicies.html DescribeResourcePolicies}
 */
export const describeResourcePolicies: Command<
  DescribeResourcePoliciesRequest,
  DescribeResourcePoliciesResponse
> = throwUnimplementedCommand('DescribeResourcePolicies');
