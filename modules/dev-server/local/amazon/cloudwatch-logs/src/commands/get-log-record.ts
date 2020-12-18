import { GetLogRecordResponse, GetLogRecordRequest } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Gets all the fields and values for a log event
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogRecord.html GetLogRecord}
 */
export const getLogRecord: Command<GetLogRecordRequest, GetLogRecordResponse> = throwUnimplementedCommand(
  'GetLogRecord'
);
