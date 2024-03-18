/**
 * Builds an observable IndexedDB transaction
 *
 * @param idbTransaction IndexedDB transaction
 * @returns Observable IndexedDB transaction
 */
export function fromIDBTransaction(idbTransaction: IDBTransaction): Observable<void> {
  return new Observable<void>(subscriber => {
    // eslint-disable-next-line no-param-reassign
    idbTransaction.oncomplete = () => {
      subscriber.next();
      subscriber.complete();
    };
    // eslint-disable-next-line no-param-reassign
    idbTransaction.onerror = () => subscriber.error();
    // eslint-disable-next-line no-param-reassign
    idbTransaction.onabort = () => subscriber.error();

    subscriber.add(() => idbTransaction.abort());
  });
}
