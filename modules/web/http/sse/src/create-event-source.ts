import { Observable } from 'rxjs';

/**
 * Creates an observable event source
 * @param url URL
 * @param options Options
 * @returns Stream of message events
 */
export function createEventSource(url: string, options?: EventSourceInit): Observable<MessageEvent> {
  return new Observable(observer => {
    const source = new EventSource(url, options);

    source.addEventListener('message', event => observer.next(event));
    source.addEventListener('error', event => {
      console.log('event source error', event);
      observer.error(event);
      observer.complete();
    });

    return () => source.close();
  });
}
