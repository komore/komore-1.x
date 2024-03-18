import { type DynamoDBWriteRequest } from '@komore/aws/dynamodb';
import { type EventStoreSnapshot } from '@komore/event/store';

import { type DynamoDBSnapshotRepositoryAttributeNames } from './attribute/dynamodb-snapshot-repository-attribute-names';

/**
 * Creates a function that returns a DynamoDB write request, given a snapshot
 *
 * @param attributeNames Repository attribute names
 * @returns Function that returns a DynamoDB write request, given a snapshot
 */
export function snapshotToDynamoDBWriteRequest(
  attributeNames: DynamoDBSnapshotRepositoryAttributeNames
): <StateType>(snapshot: EventStoreSnapshot<StateType>) => DynamoDBWriteRequest {
  return snapshot => ({
    PutRequest: {
      Item: {
        [attributeNames.aggregateKey]: {
          S: snapshot.aggregateKey,
        },
        [attributeNames.sequenceNumber]: {
          N: `${snapshot.sequenceNumber}`,
        },
        [attributeNames.state]: {
          S: JSON.stringify(snapshot.state),
        },
        [attributeNames.timestamp]: {
          S: snapshot.timestamp.toString(),
        },
      },
    },
  });
}
