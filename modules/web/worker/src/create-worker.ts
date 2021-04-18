import type { Observable, Observer } from '@komore/reactive';
import { fromWorker } from './from-worker';
import { toWorker } from './to-worker';
import type { WorkerObserverOptions } from './worker-observer-options';

/**
 * Creates a dedicated worker
 * @param scriptURL Dedicated worker script URL
 * @param options Dedicated worker options
 * @returns An observer that sends message to the worker and an observable that emits messages received from it
 * @template OutboundMessageType Outbound message type
 * @template InboundMessageType Inbound message type
 */
export function createWorker<OutgoingType = unknown, IncomingType = unknown>(
  scriptURL: URL,
  options?: WorkerOptions & WorkerObserverOptions<OutgoingType>
): [observer: Observer<OutgoingType>, observable: Observable<MessageEvent<IncomingType>>] {
  const worker = new Worker(scriptURL, options);
  const observer = toWorker(worker, options);
  const observable = fromWorker<IncomingType>(worker);
  return [observer, observable];
}
