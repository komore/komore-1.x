import { defer, redactValue, type Observable } from '@komore/reactive';

import { fromIDBRequest } from './from-idb-request';

/**
 * Deletes an IndexedDB database
 *
 * @param name Database name
 * @returns Observable that emits when the database has been deleted
 */
export function deleteIndexedDBDatabase(name: string): Observable<void> {
  return defer(() => {
    const idbRequest = indexedDB.deleteDatabase(name);
    return fromIDBRequest(idbRequest).pipe(redactValue());
  });
}
