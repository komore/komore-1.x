import { type AwsApiClientParametersWithProcessedResponse } from '@komore/aws';

import { type S3BucketName } from '../bucket/name/s3-bucket-name';

/**
 * S3 API client parameters
 */
export interface S3ApiClientParameters<T> extends AwsApiClientParametersWithProcessedResponse<T> {
  /**
   * Bucket name
   */
  readonly Bucket?: S3BucketName;
}
