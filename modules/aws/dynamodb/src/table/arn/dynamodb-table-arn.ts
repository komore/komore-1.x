import { type RegionalArn } from '@komore/aws';

/**
 * DynamoDB table ARN
 */
export type DynamoDBTableArn = RegionalArn<'dynamodb', `table/${string}`>;
