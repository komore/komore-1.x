import { Observable } from '@komore/reactive';

type EmittableType = Parameters<WebSocket['send']>[0];

/**
 * Creates an observable web socket
 *
 * @param url URL
 * @param emitter Emitter observable that acts as a source for messages sent to the server
 * @param protocols Protocols
 * @returns Observable stream of message events
 */
export function webSocket(
  url: string,
  emitter?: Observable<EmittableType>,
  protocols?: string | string[]
): Observable<MessageEvent> {
  return new Observable(subscriber => {
    const socket = new WebSocket(url, protocols);
    const subscription = emitter?.subscribe(message => socket.send(message));

    socket.addEventListener('message', event => subscriber.next(event));
    socket.addEventListener('close', () => subscriber.complete());
    socket.addEventListener('error', event => {
      console.log('websocket error', event);
      subscriber.error();
      subscriber.complete();
    });

    return () => {
      subscription?.unsubscribe();
      socket.close();
    };
  });
}
