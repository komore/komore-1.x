import { StopQueryRequest, StopQueryResponse } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Stops a query
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StopQuery.html StopQuery}
 */
export const stopQuery: Command<StopQueryRequest, StopQueryResponse> = throwUnimplementedCommand(
  'StopQuery'
);
