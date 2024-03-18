import { type ReadonlyRecord } from '@komore/typescript';
import { type S3HttpHeaderName } from './name/s3-http-header-name';
import { type S3HttpHeaderResponseElements } from './s3-http-header-response-elements';

/**
 * S3 response element by header name
 */
export const s3ResponseElementByHeaderName = {
  'x-amz-bypass-governance-retention': 'BypassGovernanceRetention',
  'x-amz-delete-marker': 'DeleteMarker',
  'x-amz-expected-bucket-owner': 'ExpectedBucketOwner',
  'x-amz-mfa': 'Mfa',
  'x-amz-request-charged': 'RequestCharged',
  'x-amz-request-payer': 'RequestPayer',
  'x-amz-version-id': 'VersionId',
} as const satisfies ReadonlyRecord<S3HttpHeaderName, keyof S3HttpHeaderResponseElements>;
