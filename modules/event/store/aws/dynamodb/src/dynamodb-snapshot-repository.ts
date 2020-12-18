import { BatchWriteItemCommand } from '@aws-sdk/client-dynamodb';
import { Snapshot, SnapshotRepository } from '@komore/event/store';
import { batchGetItem, batchWriteItem } from '@komore/integration-aws/dynamodb';
import { Observable, of } from 'rxjs';
import { ignoreElements, map } from 'rxjs/operators';
import { DynamoDBSnapshotRepositoryConfiguration, DynamoDBSnapshotRepositoryConfigurationInit } from './dynamodb-snapshot-repository-configuration';

/**
 * DynamoDB snapshot repository
 * @tempalte StateType State type
 */
export class DynamoDBSnapshotRepository<StateType> implements SnapshotRepository<StateType> {
  static readonly DEFAULT_ATTRIBUTE_NAME_AGGREGATE_KEY = 'AggregateKey';
  static readonly DEFAULT_ATTRIBUTE_NAME_SEQUENCE_NUMBER = 'SequenceNumber';
  static readonly DEFAULT_ATTRIBUTE_NAME_STATE = 'State';
  static readonly DEFAULT_ATTRIBUTE_NAME_TIMESTAMP = 'Timestamp';

  readonly configuration: DynamoDBSnapshotRepositoryConfiguration;

  /**
   * Class constructor
   * @param configuration DynamoDB snapshot repository configuration
   */
  constructor(configuration: DynamoDBSnapshotRepositoryConfigurationInit) {
    const { attributeNames, dynamoDBClient, tableName } = configuration;

    this.configuration = {
      dynamoDBClient,
      tableName,
      attributeNames: {
        aggregateKey: attributeNames?.aggregateKey ?? DynamoDBSnapshotRepository.DEFAULT_ATTRIBUTE_NAME_AGGREGATE_KEY,
        sequenceNumber:
          attributeNames?.sequenceNumber ?? DynamoDBSnapshotRepository.DEFAULT_ATTRIBUTE_NAME_SEQUENCE_NUMBER,
        state: attributeNames?.state ?? DynamoDBSnapshotRepository.DEFAULT_ATTRIBUTE_NAME_STATE,
        timestamp: attributeNames?.state ?? DynamoDBSnapshotRepository.DEFAULT_ATTRIBUTE_NAME_TIMESTAMP
      }
    };
  }

  /**
   * Loads snapshots from the repository
   * @param aggregateKeys List of aggregate keys
   * @returns Observable list of snapshots
   */
  loadSnapshots(aggregateKeys: ReadonlyArray<string>): Observable<ReadonlyArray<Snapshot<StateType> | undefined>> {
    batchGetItem({
      RequestItems: {
        [this.configuration.tableName]: {
          ProjectionExpression: '',
          Keys: aggregateKeys.map(aggregateKey => this.buildGetItem(aggregateKey))
        }
      },
      ReturnConsumedCapacity: 'NONE'
    }, this.configuration.dynamoDBClient).pipe(
      map(output => output.Responses?.[this.configuration.tableName] || []),
      map(items => aggregateKeys.map(aggregateKey => {
        const x = items[aggregateKey];
      })
    )
    /*this.client.send(new BatchGetItemCommand({
        RequestItems: {
          [this.configuration.tableName]: aggregateKeys.map(aggregateKey => ({
            GetRequest: {
                Item
            }
          }))
        }
    }));*/
    return [];
  }

  /**
   * Saves snapshots to the repository
   * @param snapshots List of snapshots
   * @returns Observable that completes once the snapshots are saved
   */
  saveSnapshots(snapshots: ReadonlyArray<Snapshot<StateType>>): Observable<never> {
    return batchWriteItem({
      RequestItems: {
        [this.configuration.tableName]: snapshots.map(snapshot => ({
          PutRequest: {
            Item: {
              [this.configuration.attributeNames.aggregateKey]: {
                S: snapshot.aggregateKey
              },
              [this.configuration.attributeNames.sequenceNumber]: {
                N: `${snapshot.sequenceNumber}`
              },
              [this.configuration.attributeNames.state]: {
                S: JSON.stringify(snapshot.state)
              },
              [this.configuration.attributeNames.timestamp]: {
                S: new Date().toISOString()
              }
            }
          }
        }))
      }
    }, this.configuration.dynamoDBClient).pipe(ignoreElements());
  }

  private buildWriteCommands(snapshots: ReadonlyArray<Snapshot<StateType>>): Observable<ReadonlyArray<BatchWriteItemCommand>> {
    const commands: Array<BatchWriteItemCommand> = [];
    const timestamp = new Date().toISOString();

    return of(commands);
  }

  private buildGetItem(aggregateKey: string): 
}
