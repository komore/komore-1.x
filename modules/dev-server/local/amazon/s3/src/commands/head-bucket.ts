import { HeadBucketRequest } from '@aws-sdk/client-s3';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Determines whether a bucket exists and access is granted
 * @note {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadBucket.html HeadBucket}
 */
export const headBucket: Command<HeadBucketRequest, void> = throwUnimplementedCommand('HeadBucket');
