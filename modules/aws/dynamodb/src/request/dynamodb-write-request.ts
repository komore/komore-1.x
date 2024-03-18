import { type DynamoDBDeleteRequest } from './dynamodb-delete-request';
import { type DynamoDBPutRequest } from './dynamodb-put-request';

/**
 * DynamoDB write request
 */
export type DynamoDBWriteRequest =
  | {
      /**
       * Request to perform a `DeleteItem` operation
       */
      readonly DeleteRequest: DynamoDBDeleteRequest;
    }
  | {
      /**
       * Request to perform a `PutItem` operation
       */
      readonly PutRequest: DynamoDBPutRequest;
    };
