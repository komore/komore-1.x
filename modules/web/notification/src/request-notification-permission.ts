import { deferPromise, throwError } from '@komore/reactive';

import { webNotificationError } from './web-notification.error';

/**
 * Requests notification permission
 *
 * @returns Notification permission result
 */
export function requestNotificationPermission(): Observable<NotificationPermission> {
  if (globalThis.Notification === undefined) {
    return throwError(() => webNotificationError.notSupported());
  }

  return deferPromise(() => Notification.requestPermission());
}
