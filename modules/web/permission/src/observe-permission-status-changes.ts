import { fromEvent, map, mergeMap, type Observable } from '@komore/reactive';

import { queryPermissionStatus } from './query-permission-status';

/**
 * Observer permission status changes
 *
 * @param permissionDescriptor Permission descriptor
 * @returns Permission state
 */
export function observePermissionStatusChanges(
  permissionDescriptor: PermissionDescriptor
): Observable<PermissionState> {
  return queryPermissionStatus(permissionDescriptor).pipe(
    mergeMap(permissionStatus => fromEvent(permissionStatus, 'change').pipe(map(() => permissionStatus.state)))
  );
}
