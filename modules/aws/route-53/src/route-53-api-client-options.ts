import { type AwsApiServiceClientOptions } from '@komore/aws';

/**
 * Route 53 API client options
 */
export interface Route53ApiClientOptions extends Omit<AwsApiServiceClientOptions, 'region'> {}
