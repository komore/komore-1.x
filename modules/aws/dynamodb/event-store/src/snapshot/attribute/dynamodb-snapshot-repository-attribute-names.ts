/**
 * DynamoDB snapshot repository attribute names
 */
export interface DynamoDBSnapshotRepositoryAttributeNames {
  /**
   * Aggregate key attribute name
   */
  readonly aggregateKey: string;
  /**
   * Sequence number attribute name
   */
  readonly sequenceNumber: string;
  /**
   * State attribute name
   */
  readonly state: string;
  /**
   * Timestamp attribute name
   */
  readonly timestamp: string;
}
