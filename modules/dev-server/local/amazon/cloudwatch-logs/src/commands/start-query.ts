import { StartQueryRequest, StartQueryResponse } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Starts a query
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html StartQuery}
 */
export const startQuery: Command<StartQueryRequest, StartQueryResponse> = throwUnimplementedCommand(
  'StartQuery'
);
