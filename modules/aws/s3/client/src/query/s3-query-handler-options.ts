import { type S3Client } from '@aws-sdk/client-s3';

/**
 * S3 query handler options
 */
export interface S3QueryHandlerOptions {
  /**
   * S3 client
   */
  readonly client: S3Client;
}
