import { DeleteResourcePolicyRequest } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Deletes a resource policy
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteResourcePolicy.html DeleteResourcePolicy}
 */
export const deleteResourcePolicy: Command<DeleteResourcePolicyRequest, void> = throwUnimplementedCommand(
  'DeleteResourcePolicy'
);
