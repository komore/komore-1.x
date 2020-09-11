import { S3Client } from '@aws-sdk/client-s3';
import { S3RequestPresigner, S3RequestPresignerOptions } from '@aws-sdk/s3-request-presigner';

/**
 * Create an S3 request pre-signer
 * @param s3ClientOrRequestPresignerOptions S3 request pre-signer options, or S3 client holding the options
 * @returns S3 request pre-signer
 */
export function createS3RequestPresigner(
  s3ClientOrRequestPresignerOptions?: S3Client | S3RequestPresignerOptions
): S3RequestPresigner {
  if (s3ClientOrRequestPresignerOptions === undefined) {
    return new S3RequestPresigner({ ...new S3Client({}).config });
  } else if (s3ClientOrRequestPresignerOptions instanceof S3Client) {
    return new S3RequestPresigner({ ...s3ClientOrRequestPresignerOptions.config });
  } else {
    return new S3RequestPresigner({ ...s3ClientOrRequestPresignerOptions });
  }
}
