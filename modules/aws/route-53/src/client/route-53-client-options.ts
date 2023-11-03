import { type Route53ClientConfig } from '@aws-sdk/client-route-53';

import { type AwsClientOptions } from '@komore/aws';

/**
 * Route 53 client options
 */
export interface Route53ClientOptions extends AwsClientOptions<Route53ClientConfig> {}
