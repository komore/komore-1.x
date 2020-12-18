import { DescribeTableInput, DescribeTableOutput } from '@aws-sdk/client-dynamodb';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Describes a DynamoDB table
 * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html DescribeTable}
 */
export const describeTable: Command<DescribeTableInput, DescribeTableOutput> = throwUnimplementedCommand(
  'DescribeTable'
);
