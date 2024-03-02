/**
 * DynamoDB provisioned throughput
 */
export interface DynamoDBProvisionedThroughput {
  /**
   * TODO
   */
  readonly NumberOfDecreasesToday: number;
  /**
   * TODO
   */
  readonly ReadCapacityUnits: number;
  /**
   * TODO
   */
  readonly WriteCapacityUnits: number;
}
