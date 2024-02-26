import { createLambdaTrigger, type LambdaTrigger } from '@komore/aws/lambda';
import { mergeMap } from '@komore/reactive';

import { isSqsEvent } from './event/is-sqs-event';
import { type SqsEventRecord } from './event/record/sqs-event-record';
import { type SqsEventResponse } from './event/response/sqs-event-response';
import { type SqsEvent } from './event/sqs-event';
import { sqsEventToSqsRecords } from './event/sqs-event-to-sqs-records';
import { type SqsEventTriggerOptions } from './sqs-event-trigger-options';

/**
 * Creates an SQS event trigger
 *
 * @param triggerOptions SQS event trigger options
 * @returns SQS event trigger
 */
export function sqsEvent<Batched extends boolean = false>(
  triggerOptions?: SqsEventTriggerOptions<Batched>
): LambdaTrigger<Batched extends true ? SqsEvent : SqsEventRecord, void | SqsEventResponse> {
  const batched = triggerOptions?.batched ?? false;

  return createLambdaTrigger({
    processor: event$ => (batched ? event$ : event$.pipe(mergeMap(sqsEventToSqsRecords))),
    test: input => (isSqsEvent(input) ? input : false),
  });
}
