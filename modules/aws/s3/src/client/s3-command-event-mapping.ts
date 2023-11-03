import { type CommandName } from '@komore/command';
import { type EventName } from '@komore/event';
import { type ReadonlyRecord } from '@komore/typescript';

import { type s3Command } from '../s3.command';
import { type s3Event } from '../s3.event';

/**
 * S3 command event mapping
 */
export const s3CommandEventMapping = {
  copyObject: 'objectCopied',
  createBucket: 'bucketCreated',
  deleteBucket: 'bucketDeleted',
  deleteObject: 'objectDeleted',
  deleteObjects: 'objectsDeleted',
  putObject: 'objectPut',
  restoreObject: 'objectRestored',
} as const satisfies ReadonlyRecord<CommandName<typeof s3Command>, EventName<typeof s3Event>>;
