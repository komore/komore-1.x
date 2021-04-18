import type { Observable } from '@komore/reactive';
import { fromEvent, merge } from '@komore/reactive';
import { mapToError } from '@komore/reactive/operators';

/**
 * Creates an observable from a worker
 * @param worker Worker
 * @returns Observable that emits whenever a message is received from the worker
 * @template IncomingType Incoming type
 */
export function fromWorker<IncomingType = unknown>(
  worker: Worker | SharedWorker
): Observable<MessageEvent<IncomingType>> {
  const eventTarget = worker instanceof SharedWorker ? worker.port : worker;
  return merge([
    fromEvent<MessageEvent<IncomingType>>(eventTarget, 'message'),
    // TODO: infer event type once fromEvent is fixed
    fromEvent<ErrorEvent>(eventTarget, 'error').pipe(mapToError())
  ]);
}
