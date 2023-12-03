import { CreateBucketCommand, DeleteObjectCommand, DeleteObjectsCommand, PutObjectCommand } from '@aws-sdk/client-s3';

import { matchAwsCommand } from '@komore/aws';

import { type S3CommandHandler } from './s3-command-handler';
import { type S3CommandHandlerOptions } from './s3-command-handler-options';

/**
 * Creates an S3 command handler
 *
 * @param options S3 command handler options
 * @return S3 command handler
 */
export function createS3CommandHandler(options: S3CommandHandlerOptions): S3CommandHandler {
  const { client } = options;
  const match = matchAwsCommand(client);

  return command =>
    match(command, {
      createBucket: CreateBucketCommand,
      deleteObject: DeleteObjectCommand,
      deleteObjects: {
        // TODO: support > 1000 objects,
        commandClass: DeleteObjectsCommand,
      },
      putObject: PutObjectCommand,
    });
}
