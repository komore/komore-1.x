import { Observable } from 'rxjs';

/**
 * Builds an observable IndexedDB transaction
 * @param idbTransaction IndexedDB transaction
 * @returns Observable IndexedDB transaction
 */
export function fromIDBTransaction(idbTransaction: IDBTransaction): Observable<void> {
  return new Observable<void>(observer => {
    idbTransaction.oncomplete = () => {
      observer.next();
      observer.complete();
    };
    idbTransaction.onerror = () => observer.error();
    idbTransaction.onabort = () => observer.error();
    return () => idbTransaction.abort();
  });
}
