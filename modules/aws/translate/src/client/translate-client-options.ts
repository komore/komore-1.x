import { type TranslateClientConfig } from '@aws-sdk/client-translate';

import { type AwsClientOptions } from '@komore/aws';

/**
 * Translate client options
 */
export interface TranslateClientOptions extends AwsClientOptions<TranslateClientConfig> {}
