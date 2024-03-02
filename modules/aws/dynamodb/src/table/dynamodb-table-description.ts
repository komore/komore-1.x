import { type DynamoDBTableArn } from './arn/dynamodb-table-arn';
import { type DynamoDBProvisionedThroughput } from './dynamodb-provisioned-throughput';
import { type DynamoDBTableName } from './name/dynamodb-table-name';
import { type DynamoDBTableStatus } from './status/dynamodb-table-status';

/**
 * DynamoDB table description
 */
export interface DynamoDBTableDescription {
  /**
   * Item count
   */
  readonly ItemCount: number;
  /**
   * Provisioned throughput
   */
  readonly ProvisionedThroughput: DynamoDBProvisionedThroughput;
  /**
   * Table ARN
   */
  readonly TableArn: DynamoDBTableArn;
  /**
   * Table name
   */
  readonly TableName: DynamoDBTableName;
  /**
   * Table size in bytes
   */
  readonly TableSizeBytes: number;
  /**
   * Table status
   */
  readonly TableStatus: DynamoDBTableStatus;
}
