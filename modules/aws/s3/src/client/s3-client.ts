import { type AwsClient } from '@komore/aws';

import { type s3Command } from '../s3.command';
import { type s3Error } from '../s3.error';
import { type s3Event } from '../s3.event';
import { type s3Query } from '../s3.query';
import { type s3CommandEventMapping } from './s3-command-event-mapping';

/**
 * S3 client
 */
export interface S3Client
  extends AwsClient<typeof s3Command, typeof s3CommandEventMapping, typeof s3Event, typeof s3Query, typeof s3Error> {}
