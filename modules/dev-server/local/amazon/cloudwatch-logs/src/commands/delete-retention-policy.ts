import { DeleteRetentionPolicyRequest } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Deletes a retention policy
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html DeleteRetentionPolicy}
 */
export const deleteRetentionPolicy: Command<DeleteRetentionPolicyRequest, void> = throwUnimplementedCommand(
  'DeleteRetentionPolicy'
);
