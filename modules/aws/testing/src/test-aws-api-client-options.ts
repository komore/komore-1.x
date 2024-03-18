import { type AwsApiClientOptions } from '@komore/aws';

/**
 * Test AWS API client options
 */
export interface TestAwsApiClientOptions extends Omit<AwsApiClientOptions, 'httpClient'> {}
