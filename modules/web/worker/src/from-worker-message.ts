import { fromEvent, type Observable } from '@komore/reactive';

export function fromWorkerMessage<IncomingMessageType = unknown>(): Observable<MessageEvent<IncomingMessageType>> {
  return fromEvent<MessageEvent<IncomingMessageType>>(globalThis, 'message');
}
