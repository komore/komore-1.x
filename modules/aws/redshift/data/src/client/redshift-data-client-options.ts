import { type RedshiftDataClientConfig } from '@aws-sdk/client-redshift-data';

import { type AwsClientOptions } from '@komore/aws';

/**
 * Redshift Data client options
 */
export interface RedshiftDataClientOptions extends AwsClientOptions<RedshiftDataClientConfig> {}
