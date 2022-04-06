import { type BatchWriteItemCommandInput, type DynamoDBClient, type WriteRequest } from '@aws-sdk/client-dynamodb';
import { type Snapshot } from '@komore/event/store';
import { batchWriteItem } from '@komore/integration-amazon/dynamodb';
import { type Observable, redactValue } from '@komore/reactive';
import { type DynamoDBSnapshotAttributeNames } from './dynamodb-snapshot-attribute-names';

/**
 * Creates a DynamoDB snapshot saver function that stores snapshots in a DynamoDB table
 * @param dynamoDBClient DynamoDB client
 * @param tableName Table name
 * @param attributeNames Attribute names
 * @returns DynamoDB snapshot saver
 * @template StateType State type
 */
export function createDynamoDBSnapshotSaver<StateType>(
  dynamoDBClient: DynamoDBClient,
  tableName: string,
  attributeNames: DynamoDBSnapshotAttributeNames
) {
  const fromSnapshot = createFromSnapshotMapper(attributeNames);

  return (snapshots: ReadonlyArray<Snapshot<StateType>>): Observable<void> => {
    const commandInput: BatchWriteItemCommandInput = {
      RequestItems: {
        [tableName]: snapshots.map(fromSnapshot)
      }
    };
    return batchWriteItem(dynamoDBClient, commandInput).pipe(redactValue());
  };
}

/**
 * Creates a mapper that maps snapshots to DynamoDB write requests
 * @param attributeNames Attribute names
 * @returns Mapper
 * @template StateType State type
 */
function createFromSnapshotMapper<StateType>(attributeNames: DynamoDBSnapshotAttributeNames) {
  return (snapshot: Snapshot<StateType>): WriteRequest => ({
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
