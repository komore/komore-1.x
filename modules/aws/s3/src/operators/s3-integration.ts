import { type S3RequestPresigner } from '@aws-sdk/s3-request-presigner';

/**
 * S3 integration
 */
export interface S3Integration {
  readonly s3RequestPresigner?: S3RequestPresigner;
}
