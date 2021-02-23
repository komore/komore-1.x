import type { DescribeTimeToLiveInput, DescribeTimeToLiveOutput } from '@aws-sdk/client-dynamodb';
import type { Command } from '@komore/dev-server-local-amazon/service';
import { pipe } from '@komore/reactive';
import { map } from '@komore/reactive/operators';
import { withDynamoDBTable } from '../operators/with-dynamodb-table';

type TempDescribeTimeToLiveInput = DescribeTimeToLiveInput & { TableName: string };

/**
 * Retrieves the TTL status of a DynamoDB table
 * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTimeToLive.html DescribeTimeToLive}
 */
export const describeTimeToLive: Command<TempDescribeTimeToLiveInput, DescribeTimeToLiveOutput> = pipe(
  withDynamoDBTable(),
  map(([_, dynamoDBTable]) => dynamoDBTable.metadata.ttlDescription),
  map(TimeToLiveDescription => ({
    TimeToLiveDescription
  }))
);
