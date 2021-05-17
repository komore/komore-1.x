/**
 * DynamoDB event repository attribute names
 */
export interface DynamoDBEventAttributeNames {
  /**
   * Aggregate key attribute name
   */
  readonly aggregateKey: string;
  /**
   * Event data attribute name
   */
  readonly eventData: string;
  /**
   * Event type attribute name
   */
  readonly eventType: string;
  /**
   * Sequence number attribute name
   */
  readonly sequenceNumber: string;
  /**
   * Timestamp attribute name
   */
  readonly timestamp: string;
}
