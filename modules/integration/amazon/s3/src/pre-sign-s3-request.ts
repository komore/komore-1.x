import type { S3RequestPresignerOptions } from '@aws-sdk/s3-request-presigner';
import type { HttpRequest, RequestPresigningArguments } from '@aws-sdk/types';
import type { Observable } from 'rxjs';
import { defer } from 'rxjs';
import { createS3RequestPresigner } from './create-s3-request-presigner';

/**
 * Pre-signs an S3 request
 * @param httpRequest HTTP request
 * @param s3ClientOrRequestPresignerOptions S3 request pre-signer options, or S3 client holding the options
 * @param preSigningArguments Pre-signing arguments
 * @returns Observable pre-signed HTTP request
 */
export function preSignS3Request(
  httpRequest: HttpRequest,
  s3ClientOrRequestPresignerOptions: S3RequestPresignerOptions,
  preSigningArguments?: RequestPresigningArguments
): Observable<HttpRequest> {
  return defer(() => {
    const s3RequestPresigner = createS3RequestPresigner(s3ClientOrRequestPresignerOptions);
    return s3RequestPresigner.presign(httpRequest, preSigningArguments);
  });
}
