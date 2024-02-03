/**
 * Creates a wake lock
 *
 * @param wakeLockType Wake lock type
 * @returns Observable that requests a wake lock when subscribed to, and releases it upon
 */
export function createWakeLock(wakeLockType: WakeLockType): Observable<never> {
  return new Observable(subscriber => {
    const sentinelHold: { sentinel?: WakeLockSentinel } = {};
    let unsubscribed = false;

    navigator.wakeLock
      .request(wakeLockType)
      .then(sentinel => {
        sentinelHold.sentinel = sentinel;
        sentinel.addEventListener('release', () => unsubscribed || subscriber.complete(), false);
      })
      .catch(error => subscriber.error(error));

    subscriber.add(() => {
      const { sentinel } = sentinelHold;
      if (sentinel !== undefined) {
        sentinel.release();
      }
      unsubscribed = true;
    });
  });
}
