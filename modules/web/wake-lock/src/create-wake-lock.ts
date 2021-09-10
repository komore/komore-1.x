import { Observable } from '@komore/reactive';

/**
 * Creates a wake lock
 * @param wakeLockType Wake lock type
 * @returns Observable that requests a wake lock
 */
export function createWakeLock(wakeLockType: WakeLockType): Observable<never> {
  return new Observable(subscriber => {
    let unsubscribed = false;

    navigator.wakeLock
      .request(wakeLockType)
      .then(sentinel => {
        sentinel.addEventListener('release', () => (unsubscribed ? subscriber.complete() : subscriber.error()), false);
      })
      .catch(error => subscriber.error(error));

    subscriber.add(() => (unsubscribed = true));
  });
}
