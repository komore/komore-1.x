import { DescribeMetricFiltersRequest, DescribeMetricFiltersResponse } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Lists metric filters
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeMetricFilters.html DescribeMetricFilters}
 */
export const describeMetricFilters: Command<
  DescribeMetricFiltersRequest,
  DescribeMetricFiltersResponse
> = throwUnimplementedCommand('DescribeMetricFilters');
