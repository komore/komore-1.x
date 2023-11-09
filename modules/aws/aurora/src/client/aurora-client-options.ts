import { type RDSDataClientConfig } from '@aws-sdk/client-rds-data';

import { type AwsClientOptions } from '@komore/aws';

/**
 * Aurora client options
 */
export interface AuroraClientOptions extends AwsClientOptions<RDSDataClientConfig> {}
