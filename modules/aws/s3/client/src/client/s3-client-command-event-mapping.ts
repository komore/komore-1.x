import { type CommandFromType } from '@komore/command';
import { type EventFromType } from '@komore/event';
import { createClientCommandEventMap } from '@komore/client';

import { type s3Command } from '../s3.command';
import { type s3Event } from '../s3.event';

/**
 * S3 client command-to-event mapping
 */
export const s3ClientCommandEventMapping = createClientCommandEventMap<
  CommandFromType<typeof s3Command>,
  EventFromType<typeof s3Event>
>()({
  copyObject: 'objectCopied',
  createBucket: 'bucketCreated',
  deleteBucket: 'bucketDeleted',
  deleteObject: 'objectDeleted',
  deleteObjects: 'objectsDeleted',
  putObject: 'objectPut',
  restoreObject: 'objectRestored',
});
