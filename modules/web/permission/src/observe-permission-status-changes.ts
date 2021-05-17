import type { Observable } from '@komore/reactive';
import { fromEvent } from '@komore/reactive';
import { map, mergeMap } from '@komore/reactive/operators';
import type { PermissionDescriptorTypes } from './permission-descriptor-types';
import { queryPermissionStatus } from './query-permission-status';

/**
 * Observer permission status changes
 * @param permissionDescriptor Permission descriptor
 * @returns 
 */
export function observePermissionStatusChanges(
  permissionDescriptor: PermissionDescriptorTypes
): Observable<PermissionState> {
  return queryPermissionStatus(permissionDescriptor).pipe(
    mergeMap(permissionStatus => fromEvent(permissionStatus, 'change').pipe(map(() => permissionStatus.state)))
  );
}
