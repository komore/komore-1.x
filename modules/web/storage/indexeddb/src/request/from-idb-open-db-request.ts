/**
 * Creates an observable from an IndexedDB open database request
 *
 * @param idbOpenRequest IndexedDB open database request
 * @returns Observable IndexedDB open database request
 */
export function fromIDBOpenDBRequest(idbOpenRequest: IDBOpenDBRequest): Observable<IDBDatabase> {
  return new Observable<IDBDatabase>(subscriber => {
    const idbDatabase = idbOpenRequest.result;

    // eslint-disable-next-line no-param-reassign
    idbOpenRequest.onsuccess = () => {
      subscriber.next(idbDatabase);
      subscriber.complete();
    };
    // eslint-disable-next-line no-param-reassign
    idbOpenRequest.onerror = error => subscriber.error(error);
    idbDatabase.onclose = () => subscriber.complete();

    subscriber.add(() => idbDatabase.close());
  });
}
