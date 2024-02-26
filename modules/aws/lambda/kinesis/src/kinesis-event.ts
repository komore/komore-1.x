import { createLambdaTrigger, type LambdaTrigger } from '@komore/aws/lambda';
import { mergeMap } from '@komore/reactive';

import { isKinesisEvent } from './event/is-kinesis-event';
import { type KinesisEventRecord } from './event/record/kinesis-event-record';
import { type KinesisEventResponse } from './event/response/kinesis-event-response';
import { type KinesisEvent } from './event/kinesis-event';
import { kinesisEventToKinesisRecords } from './event/kinesis-event-to-kinesis-records';
import { type KinesisEventTriggerOptions } from './kinesis-event-trigger-options';

/**
 * Creates a Kinesis event trigger
 *
 * @param triggerOptions Kinesis event trigger options
 * @returns Kinesis event trigger
 */
export function kinesisEvent<Batched extends boolean = false>(
  triggerOptions?: KinesisEventTriggerOptions<Batched>
): LambdaTrigger<Batched extends true ? KinesisEvent : KinesisEventRecord, void | KinesisEventResponse> {
  const batched = triggerOptions?.batched ?? false;

  return createLambdaTrigger({
    processor: event$ => (batched ? event$ : event$.pipe(mergeMap(kinesisEventToKinesisRecords))),
    test: input => (isKinesisEvent(input) ? input : false),
  });
}
