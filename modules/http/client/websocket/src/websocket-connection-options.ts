import { type Observable } from '@komore/reactive';

/**
 * WebSocket connection options
 */
export interface WebSocketConnectionOptions<DataType extends string | ArrayBuffer | ArrayBufferView | Blob = string> {
  /**
   * Emitter used to send data to the other side of the connection
   */
  readonly emitter?: Observable<DataType>;
  /**
   * List of protocols
   */
  readonly protocols?: ReadonlyArray<string>;
  /**
   * URL
   */
  readonly url: URL;
}
