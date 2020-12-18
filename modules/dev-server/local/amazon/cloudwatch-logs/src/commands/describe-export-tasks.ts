import { DescribeExportTasksRequest, DescribeExportTasksResponse } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Lists export tasks
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeExportTasks.html DescribeExportTasks}
 */
export const describeExportTasks: Command<
  DescribeExportTasksRequest,
  DescribeExportTasksResponse
> = throwUnimplementedCommand('DescribeExportTasks');
