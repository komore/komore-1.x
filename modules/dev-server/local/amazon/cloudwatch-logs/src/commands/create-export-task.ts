import { CreateExportTaskRequest } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Creates an export task
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateExportTask.html CreateExportTask}
 */
export const createExportTask: Command<CreateExportTaskRequest, void> = throwUnimplementedCommand(
  'CreateExportTask'
);
