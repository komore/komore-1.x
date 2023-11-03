import { type S3ClientConfig } from '@aws-sdk/client-s3';

import { type AwsClientOptions } from '@komore/aws';

/**
 * S3 client options
 */
export interface S3ClientOptions extends AwsClientOptions<S3ClientConfig> {}
