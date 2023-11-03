import { type S3Client } from '@aws-sdk/client-s3';

import { type AwsCommandHandlerOptions } from '@komore/aws';

import { type s3Event } from '../s3.event';

/**
 * S3 command handler options
 */
export interface S3CommandHandlerOptions extends AwsCommandHandlerOptions<S3Client, typeof s3Event> {}
