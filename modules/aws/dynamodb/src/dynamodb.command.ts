import {
  type BatchWriteItemCommandInput,
  type PutItemCommandInput,
  type UpdateItemCommandInput,
} from '@aws-sdk/client-dynamodb';

import { createAwsCommandType } from '@komore/aws';
import { commandProperties } from '@komore/command';

import { dynamoDBDomain } from './dynamodb.domain';

/**
 * DynamoDB command
 */
export const dynamoDBCommand = createAwsCommandType(dynamoDBDomain, {
  /**
   * Puts or deletes multiple items in one or more DynamoDB tables
   *
   * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html BatchWriteItem}
   */
  // TODO: circumvent 25 items/16 MB limitation
  batchWriteItem: commandProperties<BatchWriteItemCommandInput>(),
  /**
   * Creates a new item or completely replaces an existing item
   *
   * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html PutItem}
   */
  putItem: commandProperties<PutItemCommandInput>(),
  /**
   * Updates an existing item's attributes or adds a new item to the table if it did not already exist
   *
   * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateItem.html UpdateItem}
   */
  updateItem: commandProperties<UpdateItemCommandInput>(),
});
