import { Observable } from 'rxjs';
import { ObserveEventSourceOptions } from './observe-event-source-options';

/**
 * Observes an existing event source
 * @param eventSource Event source
 * @param options Options
 * @returns Stream of message events
 */
export function observeEventSource(
  eventSource: EventSource,
  options?: Partial<ObserveEventSourceOptions>
): Observable<MessageEvent> {
  return new Observable<MessageEvent>(observer => {
    const messageCallback = (event: MessageEvent) => observer.next(event);
    const errorCallback = (error: any) => observer.error(error);

    eventSource.addEventListener('message', messageCallback);
    eventSource.addEventListener('error', errorCallback);

    return () => {
      eventSource.removeEventListener('message', messageCallback);
      eventSource.removeEventListener('error', errorCallback);
    };
  });
}
