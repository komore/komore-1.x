import { GetObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';

import { matchAwsQuery } from '@komore/aws';

import { type S3QueryHandler } from './s3-query-handler';
import { type S3QueryHandlerOptions } from './s3-query-handler-options';

/**
 * Creates an S3 query handler
 *
 * @param options S3 query handler options
 * @returns S3 query handler
 */
export function createS3QueryHandler(options: S3QueryHandlerOptions): S3QueryHandler {
  const { client } = options;
  const match = matchAwsQuery(client);

  return query =>
    match(query, {
      getObject: GetObjectCommand,
      listObjects: ListObjectsV2Command,
    });
}
