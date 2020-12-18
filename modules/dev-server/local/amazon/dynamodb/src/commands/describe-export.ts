import { DescribeExportInput, DescribeExportOutput } from '@aws-sdk/client-dynamodb';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Describes an existing DynamoDB table export
 * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeExport.html DescribeExport}
 */
export const describeExport: Command<DescribeExportInput, DescribeExportOutput> = throwUnimplementedCommand(
  'DescribeExport'
);
