import { DescribeEndpointsRequest, DescribeEndpointsResponse } from '@aws-sdk/client-dynamodb';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Retrieves the regional endpoint information
 * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeEndpoints.html DescribeEndpoints}
 */
export const describeEndpoints: Command<
  DescribeEndpointsRequest,
  DescribeEndpointsResponse
> = throwUnimplementedCommand('DescribeEndpoints');
