import { DescribeContinuousBackupsInput, DescribeContinuousBackupsOutput } from '@aws-sdk/client-dynamodb';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Retrieves the status of continuous backups for a DynamoDB table
 * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContinuousBackups.html DescribeContinuousBackups}
 */
export const describeContinuousBackups: Command<
  DescribeContinuousBackupsInput,
  DescribeContinuousBackupsOutput
> = throwUnimplementedCommand('DescribeContinuousBackups');
