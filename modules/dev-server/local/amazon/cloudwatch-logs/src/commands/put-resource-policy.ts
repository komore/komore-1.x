import { PutResourcePolicyRequest } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Creates or updates a resource policy
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutResourcePolicy.html PutResourcePolicy}
 */
export const putResourcePolicy: Command<PutResourcePolicyRequest, void> = throwUnimplementedCommand(
  'PutResourcePolicy'
);
