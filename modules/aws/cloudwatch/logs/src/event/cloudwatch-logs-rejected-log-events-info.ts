/**
 * CloudWatch Logs rejected log events information
 *
 * @see {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_RejectedLogEventsInfo.html RejectedLogEventsInfo}
 */
export interface CloudWatchLogsRejectedLogEventsInfo {
  /**
   * Number of expired log events
   */
  readonly expiredLogEventEndIndex?: number;
  /**
   * Index of the first log event that is too new
   */
  readonly tooNewLogEventStartIndex?: number;
  /**
   * Index of the last log event that is too old
   */
  readonly tooOldLogEventEndIndex?: number;
}
