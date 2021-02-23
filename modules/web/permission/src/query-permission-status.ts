import type { Observable } from '@komore/reactive';
import { defer } from '@komore/reactive';

/**
 * Queries a permission status
 * @param permissionDescriptor Permission descriptor
 * @returns Permission status
 */
export function queryPermissionStatus(
  permissionDescriptor: Parameters<typeof navigator.permissions.query>[0]
): Observable<PermissionStatus> {
  return defer(() => navigator.permissions.query(permissionDescriptor));
}
