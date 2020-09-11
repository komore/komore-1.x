import { S3Client } from '@aws-sdk/client-s3';
import { S3RequestPresignerOptions } from '@aws-sdk/s3-request-presigner';
import { HttpRequest, RequestPresigningArguments } from '@aws-sdk/types';
import { Observable, pipe, UnaryFunction } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { createS3RequestPresigner } from './create-s3-request-presigner';

/**
 * Pre-signs an S3 request with a specific set of arguments
 * @param httpRequest HTTP request
 * @param preSigningArguments Pre-signing arguments
 * @returns Observable pre-signed HTTP request
 */
export function preSignS3RequestWith(
  preSigningArguments?: RequestPresigningArguments
): UnaryFunction<Observable<HttpRequest>, Observable<HttpRequest>>;

/**
 * Pre-signs an S3 request with a specific client's settings
 * @param httpRequest HTTP request
 * @param preSigningArguments Pre-signing arguments
 * @param s3Client S3 client
 * @returns Observable pre-signed HTTP request
 */
export function preSignS3RequestWith(
  preSigningArguments?: RequestPresigningArguments,
  s3Client?: S3Client
): UnaryFunction<Observable<HttpRequest>, Observable<HttpRequest>>;

/**
 * Pre-signs an S3 request with a specific client's settings
 * @param httpRequest HTTP request
 * @param preSigningArguments Pre-signing arguments
 * @param s3RequestPresignedOptions S3 request pre-signer options
 * @returns Observable pre-signed HTTP request
 */
export function preSignS3RequestWith(
  preSigningArguments?: RequestPresigningArguments,
  s3RequestPresignedOptions?: S3RequestPresignerOptions
): UnaryFunction<Observable<HttpRequest>, Observable<HttpRequest>>;

/**
 * Pre-signs an S3 request with specific presigner options or client settings
 * @param httpRequest HTTP request
 * @param preSigningArguments Pre-signing arguments
 * @param s3ClientOrRequestPresignerOptions S3 request pre-signer options, or S3 client holding the options
 * @returns Observable pre-signed HTTP request
 */
export function preSignS3RequestWith(
  preSigningArguments?: RequestPresigningArguments,
  s3ClientOrRequestPresignerOptions?: S3Client | S3RequestPresignerOptions
): UnaryFunction<Observable<HttpRequest>, Observable<HttpRequest>> {
  const s3RequestPresigner = createS3RequestPresigner(s3ClientOrRequestPresignerOptions);
  return pipe(mergeMap(httpRequest => s3RequestPresigner.presign(httpRequest, preSigningArguments)));
}
