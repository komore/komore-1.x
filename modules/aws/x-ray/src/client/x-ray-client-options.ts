import { type XRayClientConfig } from '@aws-sdk/client-xray';

import { type AwsClientOptions } from '@komore/aws';

/**
 * X-Ray client options
 */
export interface XRayClientOptions extends AwsClientOptions<XRayClientConfig> {}
