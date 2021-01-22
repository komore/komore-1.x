/**
 * DynamoDB snapshot repository attribute names
 */
export interface DynamoDBSnapshotRepositoryAttributeNames {
  readonly aggregateKey: string;
  readonly sequenceNumber: string;
  readonly state: string;
  readonly timestamp: string;
}
