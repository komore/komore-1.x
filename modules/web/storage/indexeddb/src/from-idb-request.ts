import { Observable } from '@komore/reactive';

/**
 * IndexedDB request event
 * @template T Event value type
 */
type IDBRequestEvent<T> = Event & {
  readonly target: {
    readonly result: T;
  };
};

/**
 * Tests whether an event is a database request event
 * @param event Event
 * @returns true if the event is a database request event
 * @template T Event value type
 */
function assertIDBRequestEvent<T>(event: Event): asserts event is IDBRequestEvent<T> {
  if (!(event.type === 'success' && event.target instanceof IDBRequest)) {
    throw new Error('invalid IDBRequest success event');
  }
}

/**
 * Builds an observable IndexedDB request
 * @param idbRequest IndexedDB request
 * @returns Observable IndexedDB request
 */
export function fromIDBRequest<T>(idbRequest: IDBRequest<T>): Observable<T> {
  return new Observable<T>(observer => {
    idbRequest.onsuccess = event => {
      assertIDBRequestEvent<T>(event);
      observer.next(event.target.result);
      observer.complete();
    };

    idbRequest.onerror = error => observer.error(error);

    // TODO: return () => remove handlers
  });
}
