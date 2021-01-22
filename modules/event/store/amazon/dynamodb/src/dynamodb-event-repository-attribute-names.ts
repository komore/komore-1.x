/**
 * DynamoDB event repository attribute names
 */
export interface DynamoDBEventRepositoryAttributeNames {
  readonly aggregateKey: string;
  readonly eventData: string;
  readonly eventType: string;
  readonly sequenceNumber: string;
  readonly timestamp: string;
}
