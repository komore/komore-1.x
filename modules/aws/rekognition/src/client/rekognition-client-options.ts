import { type RekognitionClientConfig } from '@aws-sdk/client-rekognition';

import { type AwsClientOptions } from '@komore/aws';

/**
 * Rekognition client options
 */
export interface RekognitionClientOptions extends AwsClientOptions<RekognitionClientConfig> {}
