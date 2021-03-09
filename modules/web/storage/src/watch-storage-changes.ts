import type { Observable } from '@komore/reactive';
import { fromEvent } from '@komore/reactive';
import { filter, share } from '@komore/reactive/operators';

/**
 * Shared storage event source
 */
const storageEvent = fromEvent<StorageEvent>(window, 'storage').pipe(share());

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
