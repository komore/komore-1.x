import { type CloudWatchLogsGroupName } from '../group/name/cloudwatch-logs-group-name';
import { type CloudWatchLogsStreamName } from '../stream/name/cloudwatch-logs-stream-name';
import { type CloudWatchLogsInputLogEvent } from './cloudwatch-logs-input-log-event';

/**
 * Put CloudWatch Logs events parameters
 *
 * @see {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html#API_PutLogEvents_RequestParameters PutLogEvents Request Parameters}
 */
export interface PutCloudWatchLogsEventsParameters {
  /**
   * List of log events
   */
  readonly logEvents: ReadonlyArray<CloudWatchLogsInputLogEvent>;
  /**
   * Log group name
   */
  readonly logGroupName: CloudWatchLogsGroupName;
  /**
   * Log stream name
   */
  readonly logStreamName: CloudWatchLogsStreamName;
}
