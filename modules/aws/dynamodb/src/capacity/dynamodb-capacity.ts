/**
 * DynamoDB capacity
 *
 * @see {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Capacity.html Capacity}
 */
export interface DynamoDBCapacity {
  /**
   * Total number of capacity units consumed on a table or an index
   */
  readonly CapacityUnits: number;
  /**
   * Total number of read capacity units consumed on a table or an index
   */
  readonly ReadCapacityUnits: number;
  /**
   * Total number of write capacity units consumed on a table or an index
   */
  readonly WriteCapacityUnits: number;
}
