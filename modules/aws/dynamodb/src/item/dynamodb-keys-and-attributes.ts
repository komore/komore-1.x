import { type ReadonlyRecord } from '@komore/typescript';

import { type DynamoDBAttributeValue } from './dynamodb-attribute-value';

/**
 * DynamoDB keys and attributes
 *
 * @see {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_KeysAndAttributes.html}
 */
export interface DynamoDBKeysAndAttributes {
  /**
   * Whether the read should be a consistent read or an eventually consistent read
   */
  readonly ConsistentRead?: boolean;
  /**
   * One or more substitution tokens for attribute names in an expression
   */
  readonly ExpressionAttributeNames: ReadonlyRecord<string, string>;
  /**
   * Projection expression identifying one or more attributes to retrieve from the table
   */
  readonly ProjectionExpression: string;
  /**
   * Prim
   */
  readonly Keys: ReadonlyArray<ReadonlyRecord<string, DynamoDBAttributeValue>>;
}
