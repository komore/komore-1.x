import type { Observable } from '@komore/reactive';
import { defer, throwError } from '@komore/reactive';

/**
 * Requests notification permission
 * @returns Notification permission result
 */
export function requestNotificationPermission(): Observable<NotificationPermission> {
  if (globalThis.Notification === undefined) {
    return throwError(() => 'Notification not supported');
  }

  return defer(() => Notification.requestPermission());
}
