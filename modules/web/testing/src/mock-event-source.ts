import { Subject } from 'rxjs';

/**
 * Mock event source
 *
 * The mock can be used directly or registered via {@linkcode MockEventSource#registerMock}.
 *
 * The mock event source behaves like a subject:
 * - `next()` emits message events
 * - `error()` emits errors
 * - `complete()` closes the connection
 */
export class MockEventSource implements EventSource {
  private static lastMockEventSource: MockEventSource | undefined = undefined;

  static readonly CONNECTING = 0;
  static readonly OPEN = 1;
  static readonly CLOSED = 2;

  private readonly _subject$: Subject<MessageEvent>;
  private _readyState = MockEventSource.CLOSED;

  readonly CONNECTING = MockEventSource.CONNECTING;
  readonly OPEN = MockEventSource.OPEN;
  readonly CLOSED = MockEventSource.CLOSED;

  readonly url: string;
  readonly withCredentials: boolean;

  onopen: ((this: EventSource, ev: Event) => any) | null = null;
  onmessage: ((this: EventSource, ev: MessageEvent) => any) | null = null;
  onerror: ((this: EventSource, ev: Event) => any) | null = null;

  /**
   * Class constructor
   * @param url URL
   * @param eventSourceInit Event source initialization options
   */
  constructor(url: string, eventSourceInit?: EventSourceInit) {
    this.url = url;
    this.withCredentials = eventSourceInit?.withCredentials ?? false;
    this._subject$ = new Subject<MessageEvent>();
    this._subject$.subscribe({
      next(event) {
        
      },
      error(error) {

      },
      complete() {
        
      }
    });
  }

  get readyState(): number {
    return this._readyState;
  }

  next<T>(data?: T, lastEventId?: string, origin?: string) {
    const messageEvent = new MessageEvent('message', {
      data,
      lastEventId,
      origin,
      ports: [],
      source: null
    });
    this.dispatchEvent(messageEvent);
  }

  error(error: any): void {
    this._subject$.error(error);
  }

  dispatchEvent(event: MessageEvent): boolean {
    this._subject$.next(event);
    return false;
  }

  addEventListener<K extends keyof EventSourceEventMap>(type: K, listener: (this: EventSource, ev: EventSourceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void {

  }

  removeEventListener<K extends keyof EventSourceEventMap>(type: K, listener: (this: EventSource, ev: EventSourceEventMap[K]) => any, options?: boolean | EventListenerOptions): void {

  }

  open(): void {

  }

  close(): void {

  }

  /**
   * Registers the mock
   * @param target Target (defaults to `globalThis`)
   */
  static registerMock(target: any = globalThis): void {
    Object.defineProperty(target, 'EventSource', MockEventSource);
  }

  static getMock(): MockEventSource {
    const lastMockEventSource = MockEventSource.lastMockEventSource;
    if (lastMockEventSource === undefined) {
      throw new Error('no new mock event source was created');
    }

    return MockEventSource.lastMock;
  }
}
