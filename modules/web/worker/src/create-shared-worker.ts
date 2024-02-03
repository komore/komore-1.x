import { type Observer } from '@komore/reactive';

import { type CreateWorkerOptions } from './create-worker-options';
import { fromWorker } from './from-worker';
import { toWorker } from './to-worker';

/**
 * Creates a shared worker
 *
 * @param scriptUrl Shared worker script URL
 * @param options Shared worker options
 * @returns An observer that sends messages to the shared worker and an observable that emits messages received from it
 * @template OutboundMessageType Outbound message type
 * @template InboundMessageType Inbound message type
 */
export function createSharedWorker<OutgoingType = unknown, IncomingType = unknown>(
  scriptUrl: URL,
  options?: CreateWorkerOptions
): readonly [observer: Observer<OutgoingType>, observable: Observable<MessageEvent<IncomingType>>] {
  const worker = new SharedWorker(scriptUrl.toString(), options);
  const observer = toWorker(worker, options);
  const observable = fromWorker<IncomingType>(worker);
  return [observer, observable];
}
