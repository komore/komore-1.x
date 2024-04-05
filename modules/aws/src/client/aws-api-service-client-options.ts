import { type AwsApiClientOptions } from './aws-api-client-options';

/**
 * AWS API service client options
 */
export type AwsApiServiceClientOptions = Omit<AwsApiClientOptions, 'service' | 'strategies'>;
