import { type AwsAccountId } from '@komore/aws';

import { type S3BucketName } from '../bucket/name/s3-bucket-name';
import { type S3ObjectKey } from './key/s3-object-key';
import { type S3ObjectVersionId } from './version/id/s3-object-version-id';

/**
 * Delete S3 object parameters
 */
export interface DeleteS3ObjectParameters {
  /**
   * Bucket name
   */
  readonly Bucket: S3BucketName;
  /**
   * Whether to bypass Government-mode restrictions
   */
  readonly BypassGovernanceRetention?: boolean;
  /**
   * Expected bucket owner
   */
  readonly ExpectedBucketOwner?: AwsAccountId;
  /**
   * Key to delete
   */
  readonly Key: S3ObjectKey;
  /**
   * MFA information
   */
  readonly Mfa?: {
    /**
     * Device serial number
     */
    readonly DeviceSerialNumber: string;
    /**
     * Value
     */
    readonly Value: string;
  };
  /**
   * Whether the requester knows that they will be charged for the request
   */
  readonly RequestPayer?: boolean;
  /**
   * Version identifier
   *
   * @note For directory buckets, only `null` is allowed
   */
  readonly VersionId?: S3ObjectVersionId | null;
}
