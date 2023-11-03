import { type TranscribeClientConfig } from '@aws-sdk/client-transcribe';

import { type AwsClientOptions } from '@komore/aws';

/**
 * Transcribe client options
 */
export interface TranscribeClientOptions extends AwsClientOptions<TranscribeClientConfig> {}
