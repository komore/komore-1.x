import { defer, Observable } from 'rxjs';

/**
 * Requests notification permission
 * @returns Notification permission result
 */
export function requestNotificationPermission(): Observable<NotificationPermission> {
  return defer(() => Notification.requestPermission());
}
