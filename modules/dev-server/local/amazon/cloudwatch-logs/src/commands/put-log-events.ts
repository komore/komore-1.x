import { PutLogEventsRequest, PutLogEventsResponse } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Records log events
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html PutLogEvents}
 */
export const putLogEvents: Command<PutLogEventsRequest, PutLogEventsResponse> = throwUnimplementedCommand(
  'PutLogEvents'
);
