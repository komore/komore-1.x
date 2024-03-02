import { type s3EventNames } from './s3-event-names';

/**
 * S3 event name
 */
export type S3EventName = (typeof s3EventNames)[number];
