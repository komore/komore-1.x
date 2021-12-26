import { fromEvent, type Observable } from '@komore/reactive';

export function fromSharedWorkerMessage<IncomingMessageType = unknown>(): Observable<MessageEvent<IncomingMessageType>> {
  return fromEvent<MessageEvent<IncomingMessageType>>(globalThis, 'message');
}
