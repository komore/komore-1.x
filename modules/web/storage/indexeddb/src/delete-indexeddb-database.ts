import { defer, redactValue } from '@komore/reactive';

import { fromIDBRequest } from './request/from-idb-request';

/**
 * Deletes an IndexedDB database
 *
 * @param databaseName Database name
 * @returns Observable that emits when the database has been deleted
 */
export function deleteIndexedDBDatabase(databaseName: string): Observable<void> {
  return defer(() => {
    const idbRequest = indexedDB.deleteDatabase(databaseName);
    return fromIDBRequest(idbRequest).pipe(redactValue());
  });
}
