import { batchGetDynamoDBItem, batchWriteDynamoDBItem } from '@komore/aws/dynamodb';
import { type EventStoreSnapshotRepository } from '@komore/event/store';
import { map, redactValue } from '@komore/reactive';

import { normalizeDynamoDBSnapshotRepositoryAttributeNames } from './attribute/normalize-dynamodb-snapshot-repository-attribute-names';
import { type DynamoDBSnapshotRepositoryOptions } from './dynamodb-snapshot-repository-options';
import { snapshotToDynamoDBWriteRequest } from './snapshot-to-dynamodb-write-request';

/**
 * Creates a DynamoDB snapshot repository
 *
 * The attribute names passes via `configuration` are used to map a snapshot to a DynamoDB item.
 *
 * By default, the attribute names are:
 * - `AggregateKey` for the aggregate key
 * - `SequenceNumber` for the sequence number
 * - `State` for the state
 * - `Timestamp` for the timestamp
 *
 * @param repositoryOptions DynamoDB snapshot repository options
 * @returns DynamoDB snapshot repository
 * @template AggregateType Aggregate type
 */
export function createDynamoDBSnapshotRepository<AggregateType>(
  repositoryOptions: DynamoDBSnapshotRepositoryOptions
): EventStoreSnapshotRepository<AggregateType> {
  const { apiClient, tableName } = repositoryOptions;
  const attributeNames = normalizeDynamoDBSnapshotRepositoryAttributeNames(repositoryOptions.attributeNames);
  const toWriteRequest = snapshotToDynamoDBWriteRequest(attributeNames);
  const batchGetItem = batchGetDynamoDBItem(apiClient);
  const batchWriteItem = batchWriteDynamoDBItem(apiClient);
  const ProjectionExpression = ''; // TODO
  const ReturnConsumedCapacity = 'NONE';

  return {
    loadSnapshots: ({ aggregateKeys }) => {
      batchGetItem({
        RequestItems: {
          [tableName]: {
            ExpressionAttributeNames,
            ProjectionExpression,
            Keys: aggregateKeys.map(aggregateKey => buildGetItem(aggregateKey)),
          },
        },
        ReturnConsumedCapacity,
      }).pipe(
        map(result => result.Responses[tableName] ?? []),
        map(items =>
          aggregateKeys.map(aggregateKey => {
            const x = items[0]?.[aggregateKey];
            return x;
          })
        )
      );
    },
    storeSnapshots: ({ snapshots }) =>
      batchWriteItem({
        RequestItems: {
          [tableName]: snapshots.map(toWriteRequest),
        },
        ReturnConsumedCapacity,
      }).pipe(redactValue()),
  };
}
