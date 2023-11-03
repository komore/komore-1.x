import { GetObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';

import { sendAwsCommand } from '@komore/aws';
import { newInstanceOf, pipe } from '@komore/functional';
import { matchQuery } from '@komore/query';

import { type S3Query } from './s3.query';
import { type S3QueryHandler } from './s3-query-handler';
import { type S3QueryHandlerOptions } from './s3-query-handler-options';

/**
 * Creates an S3 query handler
 *
 * @param options S3 query handler options
 * @returns S3 query handler
 */
export function createS3QueryHandler(options: S3QueryHandlerOptions): S3QueryHandler {
  const { logger, s3Client } = options;
  const send = sendAwsCommand(s3Client);

  logger;

  return query =>
    matchQuery<S3Query>(query, {
      getObject: pipe(newInstanceOf(GetObjectCommand), send),
      listObjects: pipe(newInstanceOf(ListObjectsV2Command), send),
    });
}
