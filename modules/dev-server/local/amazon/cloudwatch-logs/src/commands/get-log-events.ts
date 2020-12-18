import { GetLogEventsResponse, GetLogEventsRequest } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Lists events from a log stream
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogEvents.html GetLogEvents}
 */
export const getLogEvents: Command<GetLogEventsRequest, GetLogEventsResponse> = throwUnimplementedCommand(
  'GetLogEvents'
);
