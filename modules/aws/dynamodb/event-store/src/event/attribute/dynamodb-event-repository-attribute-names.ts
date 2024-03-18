/**
 * DynamoDB event repository attribute names
 */
export interface DynamoDBEventRepositoryAttributeNames {
  /**
   * Aggregate key attribute name
   */
  readonly aggregateKey: string;
  /**
   * Event data attribute name
   */
  readonly eventData: string;
  /**
   * Event name attribute name
   */
  readonly eventName: string;
  /**
   * Sequence number attribute name
   */
  readonly sequenceNumber: string;
  /**
   * Timestamp attribute name
   */
  readonly timestamp: string;
}
