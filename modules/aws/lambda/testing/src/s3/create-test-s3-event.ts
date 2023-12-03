import { type S3Event, type S3EventRecord } from '@komore/function-lambda/s3';

/**
 * Creates a test S3 event
 * @param eventRecords List of partial S3 event records
 * @returns S3 event
 */
export function createTestS3Event(eventRecords: ReadonlyArray<Partial<S3EventRecord>>): S3Event {

}
