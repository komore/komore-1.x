import {
  DescribeSubscriptionFiltersRequest,
  DescribeSubscriptionFiltersResponse
} from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Lists subscription filters
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeSubscriptionFilters.html DescribeSubscriptionFilters}
 */
export const describeSubscriptionFilters: Command<
  DescribeSubscriptionFiltersRequest,
  DescribeSubscriptionFiltersResponse
> = throwUnimplementedCommand('DescribeSubscriptionFilters');
