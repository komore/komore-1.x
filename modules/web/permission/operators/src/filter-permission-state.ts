import type { OperatorFunction } from '@komore/reactive';
import { filter } from '@komore/reactive/operators';

/**
 * Filters a permission state
 * @param permissionStates List of permission states to keep
 * @returns Operator function that filters a permission state
 * @template T Permission state types
 */
export function filterPermissionState<T extends ReadonlyArray<PermissionState>>(
  ...permissionStates: T
): OperatorFunction<PermissionState, T[number]> {
  return filter((state): state is T[number] => permissionStates.includes(state));
}
