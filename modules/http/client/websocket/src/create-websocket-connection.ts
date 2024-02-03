import { type WebSocketConnectionOptions } from './websocket-connection-options';

/**
 * Creates a WebSocket connection
 *
 * @param connectionOptions WebSocket connection options
 * @returns Observable WebSocket connection
 */
export function createWebSocketConnection(
  connectionOptions: WebSocketConnectionOptions<string>
): Observable<MessageEvent<string>>;

/**
 * Creates a WebSocket connection
 *
 * @param connectionOptions WebSocket connection options
 * @returns Observable WebSocket connection
 */
export function createWebSocketConnection(
  connectionOptions: WebSocketConnectionOptions<ArrayBuffer> & { readonly binaryType: 'arraybuffer' }
): Observable<MessageEvent<ArrayBuffer>>;

/**
 * Creates a WebSocket connection
 *
 * @param connectionOptions WebSocket connection options
 * @returns Observable WebSocket connection
 */
export function createWebSocketConnection(
  connectionOptions: WebSocketConnectionOptions<Blob> & { readonly binaryType: 'blob' }
): Observable<MessageEvent<Blob>>;

export function createWebSocketConnection<DataType extends string | ArrayBuffer | ArrayBufferView | Blob = string>(
  connectionOptions: WebSocketConnectionOptions<DataType> & { readonly binaryType?: 'arraybuffer' | 'blob' }
): Observable<MessageEvent<DataType>> {
  const { binaryType, emitter, protocols = [], url } = connectionOptions;
  return new Observable(subscriber => {
    const socket = new WebSocket(url, [...protocols]);
    const subscription = emitter?.subscribe(message => socket.send(message));

    if (binaryType !== undefined) {
      socket.binaryType = binaryType;
    }

    const message = (messageEvent: MessageEvent) => subscriber.next(messageEvent);
    const close = (_closeEvent: CloseEvent) => {
      console.log('ws close');
      // TODO: unsubscribe => socket.close() => this event => complete?
      subscriber.complete();
    };
    const error = (errorEvent: Event) => {
      console.log('websocket error', errorEvent);
      subscriber.error(errorEvent);
    };

    socket.addEventListener('message', message);
    socket.addEventListener('close', close);
    socket.addEventListener('error', error);

    subscriber.add(() => subscription?.unsubscribe());
    subscriber.add(() => socket.close());
    subscriber.add(() => {
      socket.removeEventListener('message', message);
      socket.removeEventListener('close', close);
      socket.removeEventListener('error', error);
    });
  });
}
