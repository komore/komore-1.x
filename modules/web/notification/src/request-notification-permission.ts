import type { Observable } from 'rxjs';
import { defer, throwError } from 'rxjs';

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
