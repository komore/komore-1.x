import { CreateLogGroupRequest } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Creates a log group
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogGroup.html CreateLogGroup}
 */
export const createLogGroup: Command<CreateLogGroupRequest, void> = throwUnimplementedCommand(
  'CreateLogGroup'
);
