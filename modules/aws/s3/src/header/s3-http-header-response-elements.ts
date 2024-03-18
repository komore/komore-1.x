import { type AwsAccountId } from '@komore/aws';

import { type S3ObjectVersionId } from '../object/version/id/s3-object-version-id';

export interface S3HttpHeaderResponseElements {
  readonly BypassGovernanceRetention: unknown;
  readonly DeleteMarker: boolean;
  readonly ExpectedBucketOwner: AwsAccountId;
  readonly Mfa: unknown;
  readonly RequestCharged: 'requester';
  readonly RequestPayer: AwsAccountId;
  readonly VersionId: S3ObjectVersionId;
}
