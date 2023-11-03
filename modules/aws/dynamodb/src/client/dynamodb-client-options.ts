import { type DynamoDBClientConfig } from '@aws-sdk/client-dynamodb';

import { type AwsClientOptions } from '@komore/aws';

/**
 * DynamoDB client options
 */
export interface DynamoDBClientOptions extends AwsClientOptions<DynamoDBClientConfig> {}
