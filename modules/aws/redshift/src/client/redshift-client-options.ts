import { type RedshiftDataClientConfig } from '@aws-sdk/client-redshift-data';

import { type AwsClientOptions } from '@komore/aws';

/**
 * Redshift client options
 */
export interface RedshiftClientOptions extends AwsClientOptions<RedshiftDataClientConfig> {}
