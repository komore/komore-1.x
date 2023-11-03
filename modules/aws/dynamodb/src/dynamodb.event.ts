import { type UpdateItemCommandOutput } from '@aws-sdk/client-dynamodb';

import { createAwsEventType } from '@komore/aws';
import { eventProperties } from '@komore/event';

import { dynamoDBDomain } from './dynamodb.domain';

/**
 * DynamoDB event
 */
export const dynamoDBEvent = createAwsEventType(dynamoDBDomain, {
  /**
   * An new item was added to a table, or an existing item's attributes were updated
   *
   * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateItem.html UpdateItem}
   */
  itemUpdated: eventProperties<UpdateItemCommandOutput>(),
});
