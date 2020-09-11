import { DynamoDBClient, BatchGetItemCommand, BatchWriteItemCommand } from '@aws-sdk/client-dynamodb';
import { Snapshot, SnapshotRepository } from '@komore/event';
import { DynamoDBConfiguration } from './dynamodb-configuration';

/**
 * DynamoDB event repository configuration
 */
export type DynamoDBSnapshotRepositoryConfiguration = DynamoDBConfiguration & Readonly<{
  attributeNames: Readonly<{
    aggregateKey: string;
    sequenceNumber: string;
    state: string;
    timestamp: string;
  }>;
}>;

/**
 * DynamoDB snapshot repository
 * @typeparam S State type
 */
export class DynamoDBSnapshotRepository<S> implements SnapshotRepository<S> {
  private readonly client: DynamoDBClient;

  /**
   * Class constructor
   * @param configuration DynamoDB snapshot repository configuration
   */
  constructor(private readonly configuration: DynamoDBSnapshotRepositoryConfiguration) {}

  /**
   * Loads snapshots from the repository
   * @param aggregateKeys List of aggregate keys
   * @returns Promise that resolves to a list of snapshots
   */
  async loadSnapshots(aggregateKeys: ReadonlyArray<string>): Promise<ReadonlyArray<Snapshot<S>>> {
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
   * @returns Promise that resolves once the snapshots are saved
   */
  async saveSnapshots(snapshots: ReadonlyArray<Snapshot<S>>): Promise<void> {
    if (snapshots.length > 25) {
      throw new Error('support for saving more than 25 snapshots at a time not implemented');
    }

    const timestamp = new Date().toISOString();
    const result = await this.client.send(new BatchWriteItemCommand({
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
                S: timestamp
              }
            }
          }
        }))
      }
    }));

    if (result.UnprocessedItems) {
      console.log('unprocessed items?', result.UnprocessedItems);
    }
  }
}
