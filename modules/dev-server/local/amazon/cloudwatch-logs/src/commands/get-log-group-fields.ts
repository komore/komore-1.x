import { GetLogGroupFieldsResponse, GetLogGroupFieldsRequest } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Gets the fields included in log events for a log group
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogGroupFields.html GetLogGroupFields}
 */
export const getLogGroupFields: Command<GetLogGroupFieldsRequest, GetLogGroupFieldsResponse> = throwUnimplementedCommand(
  'GetLogGroupFields'
);
