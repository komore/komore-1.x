import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Batch get DynamoDB item parameters
 *
 * @see {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html#API_BatchGetItem_RequestParameters BatchGetItem Request Parameters}
 */
export interface BatchGetDynamoDBItemParameters {
  readonly RequestItems: ReadonlyRecord<
    string,
    {
      readonly AttributesToGet: ReadonlyArray<string>;
      /**
       * Whether the read should be a consistent read or an eventually consistent read
       */
      readonly ConsistentRead: boolean;
      readonly ExpressionAttributeNames: ReadonlyRecord<string, string>;
      readonly Keys: ReadonlyArray<ReadonlyRecord<string, {}>>;
    }
  >;
}
