import { type AwsApiClientOptions } from '@komore/aws';

/**
 * DynamoDB API client options
 */
export interface DynamoDBApiClientOptions extends Omit<AwsApiClientOptions, 'service' | 'url'> {}
