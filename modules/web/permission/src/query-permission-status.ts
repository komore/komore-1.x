import { deferPromise, type Observable } from '@komore/reactive';
import { type PermissionDescriptorTypes } from './permission-descriptor-types';

/**
 * Queries a permission status
 * @param permissionDescriptor Permission descriptor
 * @returns Permission status
 */
export function queryPermissionStatus(
  permissionDescriptor: PermissionDescriptorTypes
): Observable<PermissionStatus> {
  return deferPromise(() => navigator.permissions.query(permissionDescriptor));
}
