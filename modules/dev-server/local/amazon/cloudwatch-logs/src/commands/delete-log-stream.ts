import { DeleteLogStreamRequest } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Deletes a log stream
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteLogStream.html DeleteLogStream}
 */
export const deleteLogStream: Command<DeleteLogStreamRequest, void> = throwUnimplementedCommand(
  'DeleteLogStream'
);
