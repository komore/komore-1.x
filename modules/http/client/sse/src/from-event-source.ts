import { type FromEventSourceOptions } from './from-event-source-options';

/**
 * Creates an observable event source
 *
 * @param url URL
 * @param options Event source initialization options
 * @returns Observable that emits message events from the event source
 * @template T Event data type
 */
export function fromEventSource<T>(url: URL, options?: EventSourceInit): Observable<MessageEvent<T>>;

/**
 * Creates an observable from an existing event source, optionally transferring its ownership
 *
 * @param eventSource Event source
 * @param options Options
 * @returns Observable that emits message events from the event source
 * @template T Event data type
 */
export function fromEventSource<T>(
  eventSource: EventSource,
  options?: Partial<FromEventSourceOptions>
): Observable<MessageEvent<T>>;

export function fromEventSource<T>(
  urlOrEventSource: URL | EventSource,
  options?: EventSourceInit | Partial<FromEventSourceOptions>
): Observable<MessageEvent<T>> {
  return new Observable<MessageEvent>(observer => {
    const [eventSource, closeOnUnsubscribe] = getEventSourceAndCloseOption(urlOrEventSource, options);
    const messageCallback = (event: MessageEvent) => observer.next(event);
    const errorCallback = (error: unknown) => observer.error(error);

    eventSource.addEventListener('message', messageCallback);
    eventSource.addEventListener('error', errorCallback);

    return () => {
      eventSource.removeEventListener('message', messageCallback);
      eventSource.removeEventListener('error', errorCallback);
      if (closeOnUnsubscribe) {
        eventSource.close();
      }
    };
  });
}

/**
 * Returns an event source and whether it should be closed when unsubscribing, based on the passed arguments
 *
 * @param urlOrEventSource URL or event source
 * @param options Options for a new event source or options when re-using an existing event source
 * @returns Event source and whether it should be closed when unsubscribing
 * @private
 */
function getEventSourceAndCloseOption(
  urlOrEventSource: URL | EventSource,
  options?: EventSourceInit | Partial<FromEventSourceOptions>
): readonly [eventSource: EventSource, closeOnUnsubscribe: boolean] {
  return urlOrEventSource instanceof URL
    ? [new EventSource(urlOrEventSource.toString(), options as EventSourceInit | undefined), true]
    : [urlOrEventSource, (options as Partial<FromEventSourceOptions> | undefined)?.transferOwnership ?? false];
}
