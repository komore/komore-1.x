/**
 * Creates a function that filters a permission state
 * @param permissionStates List of permission states to keep
 * @returns Funtion that filters a permission state
 * @template T Permission state types
 */
export function byPermissionState<T extends ReadonlyArray<PermissionState>>(
  ...permissionStates: T
): (state: PermissionState) => state is T[number] {
  return (state): state is T[number] => permissionStates.includes(state);
}
