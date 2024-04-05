import { type MillisecondsSinceEpoch } from '@komore/temporal';

/**
 * CloudWatch Logs input log event
 *
 * @see {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_InputLogEvent.html InputLogEvent}
 */
export interface CloudWatchLogsInputLogEvent {
  /**
   * Message
   */
  readonly message: string;
  /**
   * Timestamp
   */
  readonly timestamp: MillisecondsSinceEpoch;
}
