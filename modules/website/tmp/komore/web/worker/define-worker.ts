import type { Observable, Observer } from 'rxjs';
import { fromEvent } from 'rxjs';
import type { DefineWorkerOptions } from './define-worker-options';

/**
 * Defines a worker
 * @param options Worker options
 */
export function defineWorker<IncomingType = unknown, OutgoingType = unknown>(
  options?: DefineWorkerOptions
): [observable: Observable<MessageEvent<IncomingType>>, observer: Observer<OutgoingType>] {
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
