import { type AwsAccountId } from '@komore/aws';

/**
 * Delete S3 object parameters
 */
export interface DeleteS3ObjectParameters {
  /**
   * Whether to bypass Government-mode restrictions
   */
  readonly bypassGovernanceRetention?: boolean;
  /**
   * Bucket name
   */
  readonly bucketName: string;
  /**
   * Expected bucket owner
   */
  readonly expectedBucketOwner?: AwsAccountId;
  /**
   * Key to delete
   */
  readonly key: string;
  /**
   * MFA information
   */
  readonly mfa?: {
    /**
     * Device serial number
     */
    readonly deviceSerialNumber: string;
    /**
     * Value
     */
    readonly value: string;
  };
  /**
   * Whether the requester knows that they will be charged for the request
   */
  readonly requestPayer?: boolean;
  /**
   * Version identifier
   *
   * @note For directory buckets, only `null` is allowed
   */
  readonly versionId?: string | null;
}
