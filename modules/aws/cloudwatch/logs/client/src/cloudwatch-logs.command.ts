import {
  cloudWatchLogsDomain,
  type CreateCloudWatchLogsGroupParameters,
  type PutCloudWatchLogsEventParameters,
} from '@komore/aws/cloudwatch/logs';
import { commandProperties, createCommandType } from '@komore/command';

/**
 * CloudWatch Logs command
 */
export const cloudWatchLogsCommand = createCommandType(cloudWatchLogsDomain, {
  /**
   * Creates a log group
   *
   * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogGroup.html CreateLogGroup}
   */
  createLogGroup: commandProperties<CreateCloudWatchLogsGroupParameters>(),
  /**
   * Uploads log events to the specified log stream
   *
   * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html PutLogEvents}
   */
  putLogEvent: commandProperties<PutCloudWatchLogsEventParameters>(),
});
