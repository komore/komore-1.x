import { S3Client as AwsS3Client } from '@aws-sdk/client-s3';

import { createAwsClient } from '@komore/aws/client';

import { createS3CommandHandler } from '../command/create-s3-command-handler';
import { createS3QueryHandler } from '../query/create-s3-query-handler';
import { s3Command } from '../s3.command';
import { s3Error } from '../s3.error';
import { s3Event } from '../s3.event';
import { s3Query } from '../s3.query';
import { type S3Client } from './s3-client';
import { type S3ClientOptions } from './s3-client-options';
import { s3ClientCommandEventMapping } from './s3-client-command-event-mapping';

/**
 * Creates an S3 client
 *
 * @param options S3 client options
 * @returns S3 client
 */
export function createS3Client(options: S3ClientOptions): S3Client {
  const client = new AwsS3Client(options);
  return createAwsClient({
    client,
    commandEventMapping: s3ClientCommandEventMapping,
    commandHandler: events => createS3CommandHandler({ client, events }),
    command: s3Command,
    error: s3Error,
    event: s3Event,
    query: s3Query,
    queryHandler: () => createS3QueryHandler({ client }),
  });
}
