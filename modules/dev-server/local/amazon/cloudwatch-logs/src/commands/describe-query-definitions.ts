import { DescribeQueryDefinitionsRequest, DescribeQueryDefinitionsResponse } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Lists query definitions
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueryDefinitions.html DescribeQueryDefinitions}
 */
export const describeQueryDefinitions: Command<
  DescribeQueryDefinitionsRequest,
  DescribeQueryDefinitionsResponse
> = throwUnimplementedCommand('DescribeQueryDefinitions');
