/**
 * Event load request to DynamoDB query parameters parameters
 */
export interface EventLoadRequestToDynamoDBQueryParametersParameters {
  /**
   * Aggregate key
   */
  readonly aggregateKey: string;
  /**
   * Sequence end
   */
  readonly sequenceEnd?: number;
  /**
   * Sequence start
   */
  readonly sequenceStart?: number;
}
