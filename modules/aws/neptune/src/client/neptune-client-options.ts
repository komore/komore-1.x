import { type NeptuneClientConfig } from '@aws-sdk/client-neptune';

import { type AwsClientOptions } from '@komore/aws';

/**
 * Neptune client options
 */
export interface NeptuneClientOptions extends AwsClientOptions<NeptuneClientConfig> {}
