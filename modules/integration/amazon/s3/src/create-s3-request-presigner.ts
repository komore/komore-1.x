import type { S3RequestPresignerOptions } from '@aws-sdk/s3-request-presigner';
import { S3RequestPresigner } from '@aws-sdk/s3-request-presigner';

/**
 * Creates an S3 request pre-signer
 * @param s3ClientOrRequestPresignerOptions S3 request pre-signer options, or S3 client holding the options
 * @returns S3 request pre-signer
 */
export function createS3RequestPresigner(s3RequestPresignerOptions: S3RequestPresignerOptions): S3RequestPresigner {
  return new S3RequestPresigner(s3RequestPresignerOptions);
}
