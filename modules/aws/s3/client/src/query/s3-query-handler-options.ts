import { type S3ApiClient } from '@komore/aws/s3';

/**
 * S3 query handler options
 */
export interface S3QueryHandlerOptions {
  /**
   * S3 API client
   */
  readonly apiClient: S3ApiClient;
}
