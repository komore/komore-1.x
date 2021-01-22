import type { BatchGetItemCommandInput, BatchWriteItemCommandInput, WriteRequest } from '@aws-sdk/client-dynamodb';
import type { Snapshot, SnapshotRepository } from '@komore/event/store';
import { batchGetItem, batchWriteItem, createDynamoDBClient } from '@komore/integration-amazon/dynamodb';
import { map } from 'rxjs/operators';
import type { DynamoDBSnapshotRepositoryAttributeNames } from './dynamodb-snapshot-repository-attribute-names';
import type { DynamoDBSnapshotRepositoryConfiguration } from './dynamodb-snapshot-repository-configuration';

/**
 * Creates a DynamoDB snapshot repository
 * @param configuration Configuration
 * @template StateType State type
 * @returns DynamoDB snapshot repository
 */
export function dynamoDBSnapshotRepository<StateType>(configuration: DynamoDBSnapshotRepositoryConfiguration): SnapshotRepository<StateType> {
  const dynamoDBClient = configuration.dynamoDBClient ?? createDynamoDBClient();
  const tableName = configuration.tableName;
  const attributeNames: DynamoDBSnapshotRepositoryAttributeNames = {
    aggregateKey: configuration.attributeNames?.aggregateKey ?? defaultAttributeNameAggregateKey,
    sequenceNumber: configuration.attributeNames?.sequenceNumber ?? defaultAttributeNameSequenceNumber,
    state: configuration.attributeNames?.state ?? defaultAttributeNameState,
    timestamp: configuration.attributeNames?.timestamp ?? defaultAttributeNameTimestamp
  };

  return {
    loadSnapshots: aggregateKeys => {
      const commandInput = buildGetItemCommandInput(tableName, attributeNames, aggregateKeys);
      batchGetItem(dynamoDBClient, commandInput).pipe(
        map(output => output.Responses?.[tableName] ?? []),
        map(items => aggregateKeys.map(aggregateKey => {
          const _x = items[0][aggregateKey];
        }))
      );
    },
    saveSnapshots: snapshots => {
      const commandInput = buildWriteItemCommandInput(tableName, attributeNames, snapshots);
      batchWriteItem(dynamoDBClient, commandInput);
    }
  };
}

/**
 * Builds a `BatchGetItem` command input
 * @param tableName Table name
 * @param attributeNames Attribute names
 * @param aggregateKeys Aggregate keys
 * @returns `BatchGetItem` command input
 */
function buildGetItemCommandInput(tableName: string, attributeNames: DynamoDBSnapshotRepositoryAttributeNames, aggregateKeys: ReadonlyArray<string>): BatchGetItemCommandInput {
  return {
    RequestItems: {
      [tableName]: {
        AttributesToGet: Object.values(attributeNames),
        ProjectionExpression: '',
        Keys: aggregateKeys.map(aggregateKey => this.buildGetItem(aggregateKey))
      }
    },
    ReturnConsumedCapacity: 'NONE'
  };
}

/**
 * Builds a `BatchWriteItem` command input
 * @param tableName Table name
 * @param attributeNames Attribute names
 * @param snapshots List of snapshots
 * @returns `BatchWriteItem` command input
 */
function buildWriteItemCommandInput<StateType>(tableName: string, attributeNames: DynamoDBSnapshotRepositoryAttributeNames, snapshots: ReadonlyArray<Snapshot<StateType>>): BatchWriteItemCommandInput {
  return {
    RequestItems: {
      [tableName]: snapshots.map(buildWriteRequest(attributeNames))
    }
  };
}

/**
 * Builds a write request for a snapshot
 * @param attributeNames Attribute names
 * @param snapshot Snapshot
 * @returns Write request
 * @template StateType State type
 */
function buildWriteRequest(attributeNames: DynamoDBSnapshotRepositoryAttributeNames) {
  return <StateType>(snapshot: Snapshot<StateType>): WriteRequest => ({
    PutRequest: {
      Item: {
        [attributeNames.aggregateKey]: {
          S: snapshot.aggregateKey
        },
        [attributeNames.sequenceNumber]: {
          N: `${snapshot.sequenceNumber}`
        },
        [attributeNames.state]: {
          S: JSON.stringify(snapshot.state)
        },
        [attributeNames.timestamp]: {
          S: snapshot.timestamp.toISOString()
        }
      }
    }
  });
}

const defaultAttributeNameAggregateKey = 'AggregateKey';
const defaultAttributeNameSequenceNumber = 'SequenceNumber';
const defaultAttributeNameState = 'State';
const defaultAttributeNameTimestamp = 'Timestamp';
