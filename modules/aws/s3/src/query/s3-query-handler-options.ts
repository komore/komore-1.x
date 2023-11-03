import { type S3Client } from '@aws-sdk/client-s3';

import { type Logger } from '@komore/logging';

/**
 * S3 query handler options
 */
export interface S3QueryHandlerOptions {
  /**
   * Logger
   */
  readonly logger: Logger;
  /**
   * S3 client
   */
  readonly s3Client: S3Client;
}
