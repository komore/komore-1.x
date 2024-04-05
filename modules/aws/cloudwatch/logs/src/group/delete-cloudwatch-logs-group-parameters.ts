import { type CloudWatchLogsGroupName } from './name/cloudwatch-logs-group-name';

/**
 * Delete CloudWatch Logs group parameters
 *
 * @see {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteLogGroup.html#API_DeleteLogGroup_RequestParameters DeleteLogGroup Request Parameters}
 */
export interface DeleteCloudWatchLogsGroupParameters {
  /**
   * Log group name
   */
  readonly logGroupName: CloudWatchLogsGroupName;
}
