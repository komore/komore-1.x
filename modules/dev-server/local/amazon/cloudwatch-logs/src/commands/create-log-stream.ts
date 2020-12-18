import { CreateLogStreamRequest } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Creates a log stream
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogStream.html CreateLogStream}
 */
export const createLogStream: Command<CreateLogStreamRequest, void> = throwUnimplementedCommand(
  'CreateLogStream'
);
