import { fromEvent, type Observable, type Observer } from '@komore/reactive';
import { type DefineWorkerOptions } from './define-worker-options';

/**
 * Defines a worker
 * @param options Worker options
 * @returns Observable that receives messages posted to the worker, and observer that post messages from the worker
 * @template IncomingType Incoming type
 * @template OutgoingType Outgoing type
 */
export function defineWorker<IncomingType = unknown, OutgoingType = unknown>(
  _options?: DefineWorkerOptions
): readonly [observable: Observable<MessageEvent<IncomingType>>, observer: Observer<OutgoingType>] {
  //const isShared = self instanceof SharedWorkerGlobalScope;
  const observable = fromEvent<MessageEvent<IncomingType>>(self, 'message');

  function next(value: OutgoingType) {
    // TODO: target origin and stuff + transferrables
    self.postMessage(value);
  }

  const observer = {
    next,
    error,
    complete
  };

  return [observable, observer];
}

function error(error: unknown) {
  console.log('[WORKER] error', error);
}

function complete(): void {
  console.log('[WORKER] completed');
}
