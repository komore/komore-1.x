import { deferPromise, type Observable } from '@komore/reactive';

/**
 * Queries a permission status
 *
 * @param permissionDescriptor Permission descriptor
 * @returns Permission status
 */
export function queryPermissionStatus(permissionDescriptor: PermissionDescriptor): Observable<PermissionStatus> {
  return deferPromise(() => navigator.permissions.query(permissionDescriptor));
}
