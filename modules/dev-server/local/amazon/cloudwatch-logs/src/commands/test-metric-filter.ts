import { TestMetricFilterRequest, TestMetricFilterResponse } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Tests a metric filter
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TestMetricFilter.html TestMetricFilter}
 */
export const testMetricFilter: Command<TestMetricFilterRequest, TestMetricFilterResponse> = throwUnimplementedCommand(
  'TestMetricFilter'
);
