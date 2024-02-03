import { deferPromise } from '@komore/reactive';

/**
 * Creates a Web Push subscription
 *
 * @param pushManager Push manager
 * @returns Web Push subscription
 */
export function createWebPushSubscription(pushManager: PushManager): Observable<PushSubscription> {
  return deferPromise(() => pushManager.subscribe());
}
