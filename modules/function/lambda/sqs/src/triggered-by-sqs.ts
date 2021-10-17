import type { Observable } from '@komore/reactive';
import { ignoreValues } from '@komore/reactive';
import { } from '@komore/function-lambda';
import type { SqsEvent } from './event/sqs-event';

export function triggeredBySqs(
  project: (event$: Observable<SqsEvent>) => Observable<unknown>
): (event$: Observable<readonly [SqsEvent, LambdaEventContext]>) => Observable<void> {
  return event$ => project(event$).pipe(ignoreValues());
}
