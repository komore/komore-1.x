import type { Observable, Observer } from '@komore/reactive';
import type { DefineWorkerOptions } from './define-worker-options';

/**
 * Defines a worker
 * @param options Worker options
 */
export function defineWorker<OutgoingType = unknown, IncomingType = unknown>(
  options?: DefineWorkerOptions
): [observer: Observer<OutgoingType>, observable: Observable<IncomingType>] {
  const isShared = self instanceof SharedWorkerGlobalScope;


}
