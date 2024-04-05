import { type CloudWatchLogsRejectedLogEventsInfo } from './cloudwatch-logs-rejected-log-events-info';

/**
 * Put CloudWatch Logs events result
 *
 * @see {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html#API_PutLogEvents_ResponseElements PutLogEvents Response Elements}
 */
export interface PutCloudWatchLogsEventsResult {
  /**
   * Rejected log events information
   */
  readonly rejectedLogEventsInfo: CloudWatchLogsRejectedLogEventsInfo;
}
