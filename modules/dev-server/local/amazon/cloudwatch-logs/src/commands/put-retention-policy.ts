import { PutRetentionPolicyRequest } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Sets the retention policy for a log group
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutRetentionPolicy.html PutRetentionPolicy}
 */
export const putRetentionPolicy: Command<PutRetentionPolicyRequest, void> = throwUnimplementedCommand(
  'PutRetentionPolicy'
);
