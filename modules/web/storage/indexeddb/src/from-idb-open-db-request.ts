import { Observable } from '@komore/reactive';

/**
 * Creates an observable from an IndexedDB open database request
 * @param idbOpenRequest IndexedDB open database request
 * @returns Observable IndexedDB open database request
 */
export function fromIDBOpenDBRequest(idbOpenRequest: IDBOpenDBRequest): Observable<IDBDatabase> {
  return new Observable<IDBDatabase>(observer => {
    const idbDatabase = idbOpenRequest.result;

    idbOpenRequest.onsuccess = () => observer.next(idbDatabase);
    idbOpenRequest.onerror = error => observer.error(error);
    idbDatabase.onclose = () => observer.complete();

    return () => idbDatabase.close();
  });
}
