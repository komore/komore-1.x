import { defer, filter, fromEvent, cache } from '@komore/reactive';

/**
 * Shared storage event source
 */
const storageEvent = defer(() => fromEvent<StorageEvent>(window, 'storage')).pipe(cache());

/**
 * Watches for storage changes
 * @param storage Storage to watch
 * @returns Stream of storage events
 */
export function watchStorageChanges(storage?: Storage): Observable<StorageEvent> {
  if (storage === undefined) {
    return storageEvent;
  }

  return storageEvent.pipe(filter(({ storageArea }) => storageArea === storage));
}
