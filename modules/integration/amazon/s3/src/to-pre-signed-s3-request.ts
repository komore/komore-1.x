import type { S3RequestPresignerOptions } from '@aws-sdk/s3-request-presigner';
import type { HttpRequest, RequestPresigningArguments } from '@aws-sdk/types';
import type { Observable } from '@komore/reactive';
import { fromPromise } from '@komore/reactive/promise';
import { createS3RequestPresigner } from './create-s3-request-presigner';

/**
 * Creates a function that returns a pre-signed S3 request
 * @param s3ClientOrRequestPresignerOptions S3 request pre-signer options, or S3 client holding the options
 * @param preSigningArguments Pre-signing arguments
 * @returns Function that returns a pre-signed S3 request
 */
export function toPreSignedS3Request(
  s3ClientOrRequestPresignerOptions: S3RequestPresignerOptions,
  preSigningArguments?: RequestPresigningArguments
): (httpRequest: HttpRequest) => Observable<HttpRequest> {
  const s3RequestPresigner = createS3RequestPresigner(s3ClientOrRequestPresignerOptions);
  return httpRequest => fromPromise(s3RequestPresigner.presign(httpRequest, preSigningArguments));
}
