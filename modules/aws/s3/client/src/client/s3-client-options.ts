import { type S3ApiClient } from '@komore/aws/s3';

/**
 * S3 client options
 */
export interface S3ClientOptions {
  /**
   * S3 APi client
   */
  readonly apiClient: S3ApiClient;
}
