import { type Arn, type AwsAccountId, type AwsRegion } from '@komore/aws';

/**
 * DynamoDB table ARN
 */
export type DynamoDBTableArn = Arn<'dynamodb', `${AwsRegion}:${AwsAccountId}:table/${string}`>;
