import { type BatchGetItemCommandInput } from '@aws-sdk/client-dynamodb';
import { type SnapshotRepository } from '@komore/event/store';
import { batchGetItem, createDynamoDBClient } from '@komore/integration-amazon/dynamodb';
import { map } from '@komore/reactive';
import { buildDynamoDBSnapshotAttributeNames } from './build-dynamodb-snapshot-attribute-names';
import { createDynamoDBSnapshotSaver } from './create-dynamodb-snapshot-saver';
import { type DynamoDBSnapshotAttributeNames } from './dynamodb-snapshot-attribute-names';
import { type DynamoDBSnapshotRepositoryConfiguration } from './dynamodb-snapshot-repository-configuration';

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
 * @param configuration Configuration
 * @returns DynamoDB snapshot repository
 * @template StateType State type
 */
export function createDynamoDBSnapshotRepository<StateType>(
  configuration: DynamoDBSnapshotRepositoryConfiguration
): SnapshotRepository<StateType> {
  const dynamoDBClient = configuration.dynamoDBClient ?? createDynamoDBClient();
  const tableName = configuration.tableName;
  const attributeNames = buildDynamoDBSnapshotAttributeNames(configuration.attributeNames);
  const loadSnapshots = createDynamoDBSnapshotLoader<StateType>(dynamoDBClient, tableName, attributeNames);
  const storeSnapshots = createDynamoDBSnapshotSaver<StateType>(dynamoDBClient, tableName, attributeNames);

  return {
    loadSnapshots: aggregateKeys => {
      const commandInput = buildGetItemCommandInput(tableName, attributeNames, aggregateKeys);
      batchGetItem(dynamoDBClient, commandInput).pipe(
        map(output => output.Responses?.[tableName] ?? []),
        map(items =>
          aggregateKeys.map(aggregateKey => {
            const _x = items[0][aggregateKey];
          })
        )
      );
    },
    storeSnapshots
  };
}

/**
 * Builds a `BatchGetItem` command input
 * @param tableName Table name
 * @param attributeNames Attribute names
 * @param aggregateKeys Aggregate keys
 * @returns `BatchGetItem` command input
 */
function buildGetItemCommandInput(
  tableName: string,
  attributeNames: DynamoDBSnapshotAttributeNames,
  aggregateKeys: ReadonlyArray<string>
): BatchGetItemCommandInput {
  return {
    RequestItems: {
      [tableName]: {
        AttributesToGet: Object.values(attributeNames),
        ProjectionExpression: '',
        Keys: aggregateKeys.map(aggregateKey => buildGetItem(aggregateKey))
      }
    },
    ReturnConsumedCapacity: 'NONE'
  };
}
