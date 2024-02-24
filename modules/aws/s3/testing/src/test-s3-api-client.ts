import { type S3ApiClient } from '@komore/aws/s3';
import { type TestAwsApiClient } from '@komore/aws/testing';

/**
 * Test S3 API client
 */
export interface TestS3ApiClient extends S3ApiClient, TestAwsApiClient {}
