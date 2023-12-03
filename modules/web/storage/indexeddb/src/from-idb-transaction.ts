import { Observable } from '@komore/reactive';

/**
 * Builds an observable IndexedDB transaction
 *
 * @param idbTransaction IndexedDB transaction
 * @returns Observable IndexedDB transaction
 */
export function fromIDBTransaction(idbTransaction: IDBTransaction): Observable<void> {
  return new Observable<void>(subscriber => {
    idbTransaction.oncomplete = () => {
      subscriber.next();
      subscriber.complete();
    };
    idbTransaction.onerror = () => subscriber.error();
    idbTransaction.onabort = () => subscriber.error();

    subscriber.add(() => idbTransaction.abort());
  });
}
