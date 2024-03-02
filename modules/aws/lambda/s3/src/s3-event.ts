import { createLambdaTrigger, type LambdaTrigger } from '@komore/aws/lambda';

import { type S3Event } from './event/s3-event';
import { isS3Event } from './event/is-s3-event';
import { type S3EventRecord } from './event/record/s3-event-record';
import { type S3EventTriggerOptions } from './s3-event-trigger-options';

/**
 * Creates an S3 event trigger
 *
 * @param triggerOptions S3 event trigger options
 * @returns S3 event trigger
 */
export function s3Event<Batched extends boolean = false>(
  triggerOptions?: S3EventTriggerOptions<Batched>
): LambdaTrigger<Batched extends true ? S3Event : S3EventRecord, void> {
  const batched = triggerOptions?.batched ?? false;

  return createLambdaTrigger({
    processor: event$ => (batched ? event$ : event$.pipe(mergeMap(kinesisEventToKinesisRecords))),
    test: input => (isS3Event(input) ? input : false),
  });
}
