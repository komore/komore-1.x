import { CreateBucketCommand, DeleteObjectCommand, DeleteObjectsCommand, PutObjectCommand } from '@aws-sdk/client-s3';

import { matchAwsCommand } from '@komore/aws';
import { toEventCausedByCommand } from '@komore/client';
import { cache, first, map, mergeMap, redactValue, tapNext } from '@komore/reactive';

import { type S3CommandHandler } from './s3-command-handler';
import { type S3CommandHandlerOptions } from './s3-command-handler-options';

/**
 * Creates an S3 command handler
 *
 * @param handlerOptions S3 command handler options
 * @return S3 command handler
 */
export function createS3CommandHandler(handlerOptions: S3CommandHandlerOptions): S3CommandHandler {
  const { client$, toEvents } = handlerOptions;
  const match$ = client$.pipe(map(matchAwsCommand), cache());

  return command =>
    match$.pipe(
      first(),
      mergeMap(match =>
        match(command, {
          createBucket: CreateBucketCommand,
          deleteObject: DeleteObjectCommand,
          deleteObjects: {
            // TODO: support > 1000 objects,
            commandClass: DeleteObjectsCommand,
          },
          putObject: PutObjectCommand,
        }).pipe(map(toEventCausedByCommand(command)), tapNext(toEvents), redactValue())
      )
    );
}
