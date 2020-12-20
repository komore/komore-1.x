import { S3RequestPresigner } from '@aws-sdk/s3-request-presigner';

/**
 * S3 integration
 */
export type S3Integration = Readonly<{
  s3RequestPresigner?: S3RequestPresigner;
}>;
