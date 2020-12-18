import { FilterLogEventsResponse, FilterLogEventsRequest } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Lists events from a log group
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_FilterLogEvents.html FilterLogEvents}
 */
export const filterLogEvents: Command<FilterLogEventsRequest, FilterLogEventsResponse> = throwUnimplementedCommand(
  'FilterLogEvents'
);
