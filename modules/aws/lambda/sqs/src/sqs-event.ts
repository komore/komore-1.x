import { type LambdaEventContext } from '@komore/aws/lambda';
import { redactValue } from '@komore/reactive';

import { type SqsEvent } from './event/sqs-event';

export function sqsEvent(
  project: (event$: Observable<SqsEvent>) => Observable<unknown>
): (event$: Observable<readonly [SqsEvent, LambdaEventContext]>) => Observable<void> {
  return event$ => project(event$).pipe(redactValue());
}
