/**
 * IndexedDB request event
 *
 * @template T Event value type
 */
type IDBRequestEvent<T> = Event & {
  readonly target: {
    readonly result: T;
  };
};

/**
 * Tests whether an event is a database request event
 *
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
 *
 * @param idbRequest IndexedDB request
 * @returns Observable IndexedDB request
 */
export function fromIDBRequest<T>(idbRequest: IDBRequest<T>): Observable<T> {
  return new Observable<T>(subscriber => {
    // eslint-disable-next-line no-param-reassign
    idbRequest.onsuccess = event => {
      assertIDBRequestEvent<T>(event);
      subscriber.next(event.target.result);
      subscriber.complete();
    };

    // eslint-disable-next-line no-param-reassign
    idbRequest.onerror = error => subscriber.error(error);

    // TODO: subscriber.add(() => remove handlers);
  });
}
