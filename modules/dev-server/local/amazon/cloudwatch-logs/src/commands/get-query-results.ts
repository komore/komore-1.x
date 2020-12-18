import { GetQueryResultsResponse, GetQueryResultsRequest } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Gets the results from a query
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetQueryResults.html GetQueryResults}
 */
export const getQueryResults: Command<GetQueryResultsRequest, GetQueryResultsResponse> = throwUnimplementedCommand(
  'GetQueryResults'
);
