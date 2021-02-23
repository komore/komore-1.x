import { Observable } from '@komore/reactive';
import type { FromEventSourceOptions } from './from-event-source-options';

/**
 * Creates an observable from an existing event source
 * @param eventSource Event source
 * @param options Options
 * @returns Stream of message events
 */
export function fromEventSource(url: URL, options?: EventSourceInit): Observable<MessageEvent>;

/**
 * Creates an observable from an existing event source
 * @param eventSource Event source
 * @param options Options
 * @returns Observable that emits message events from the event source
 */
export function fromEventSource(
  eventSource: EventSource,
  options?: Partial<FromEventSourceOptions>
): Observable<MessageEvent>;

export function fromEventSource(
  urlOrEventSource: URL,
  options?: EventSourceInit | Partial<FromEventSourceOptions>
): Observable<MessageEvent> {
  const [eventSource, closeOnUnsubscribe] =
    urlOrEventSource instanceof URL
      ? [new EventSource(urlOrEventSource.toString(), options as EventSourceInit | undefined), true]
      : [urlOrEventSource, (options as Partial<FromEventSourceOptions> | undefined)?.transferOwnership ?? false];

  return new Observable<MessageEvent>(observer => {
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
