import { type CreateLogGroupCommandInput, type PutLogEventsCommandInput } from '@aws-sdk/client-cloudwatch-logs';

import { createAwsCommandType } from '@komore/aws';
import { commandProperties } from '@komore/command';

import { cloudWatchLogsDomain } from './cloudwatch-logs.domain';

/**
 * CloudWatch Logs command
 */
export const cloudWatchLogsCommand = createAwsCommandType(cloudWatchLogsDomain, {
  /**
   * Creates a log group
   *
   * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogGroup.html CreateLogGroup}
   */
  createLogGroup: commandProperties<CreateLogGroupCommandInput>(),
  /**
   * Uploads log events to the specified log stream
   *
   * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html PutLogEvents}
   */
  putLogEvent: commandProperties<PutLogEventsCommandInput>(),
});
