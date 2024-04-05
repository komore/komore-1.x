import { type KmsKeyArn } from '@komore/aws/kms';

import { type CloudWatchLogsGroupClass } from './class/cloudwatch-logs-group-class';
import { type CloudWatchLogsGroupName } from './name/cloudwatch-logs-group-name';
import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Create CloudWatch Logs group parameters
 *
 * @see {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogGroup.html#API_CreateLogGroup_RequestParameters CreateLogGroup Request Parameters}
 */
export interface CreateCloudWatchLogsGroupParameters {
  /**
   * KMS key ARN
   */
  readonly kmsKeyId?: KmsKeyArn;
  /**
   * Class
   *
   * @note Defaults to `STANDARD`
   */
  readonly logGroupClass?: CloudWatchLogsGroupClass;
  /**
   * Name
   */
  readonly logGroupName: CloudWatchLogsGroupName;
  /**
   * Tags
   */
  readonly tags?: ReadonlyRecord<string, string>; // TODO: typed
}
