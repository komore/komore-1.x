import { S3Client } from '@aws-sdk/client-s3';
import { S3RequestPresignerOptions } from '@aws-sdk/s3-request-presigner';
import { HttpRequest, RequestPresigningArguments } from '@aws-sdk/types';
import { defer, Observable } from 'rxjs';
import { createS3RequestPresigner } from './create-s3-request-presigner';

/**
 * Pre-signs an S3 request
 * @param httpRequest HTTP request
 * @param preSigningArguments Pre-signing arguments
 * @param s3Client S3 client holding the options to use when pre-signing
 * @returns Observable pre-signed HTTP request
 */
export function preSignS3Request(
  httpRequest: HttpRequest,
  preSigningArguments?: RequestPresigningArguments,
  s3Client?: S3Client
): Observable<HttpRequest>;

/**
 * Pre-signs an S3 request
 * @param httpRequest HTTP request
 * @param preSigningArguments Pre-signing arguments
 * @param s3RequestPresignerOptions  S3 request pre-signer options
 * @returns Observable pre-signed HTTP request
 */
export function preSignS3Request(
  httpRequest: HttpRequest,
  preSigningArguments?: RequestPresigningArguments,
  s3RequestPresignerOptions?: S3RequestPresignerOptions
): Observable<HttpRequest>;

/**
 * Pre-signs an S3 request
 * @param httpRequest HTTP request
 * @param preSigningArguments
 * @param s3ClientOrRequestPresignerOptions S3 request pre-signer options, or S3 client holding the options
 * @returns Observable pre-signed HTTP request
 */
export function preSignS3Request(
  httpRequest: HttpRequest,
  preSigningArguments?: RequestPresigningArguments,
  s3ClientOrRequestPresignerOptions?: S3Client | S3RequestPresignerOptions
): Observable<HttpRequest> {
  return defer(() => {
    const s3RequestPresigner = createS3RequestPresigner(s3ClientOrRequestPresignerOptions);
    return s3RequestPresigner.presign(httpRequest, preSigningArguments);
  });
}
