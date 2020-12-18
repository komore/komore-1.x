import { CancelExportTaskRequest } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Cancels an export task
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CancelExportTask.html CancelExportTask}
 */
export const cancelExportTask: Command<CancelExportTaskRequest, void> = throwUnimplementedCommand(
  'CancelExportTask'
);
