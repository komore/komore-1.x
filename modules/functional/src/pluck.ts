/**
 * Plucks a property from an object
 * @param propertyName Property name
 * @returns Property value
 * @template T Object type
 * @template PropertyName Property name
 */
export function pluck<T extends Record<string, unknown>, PropertyName extends keyof T>(
  propertyName: PropertyName
): (value: T) => T[PropertyName] {
  return value => value[propertyName];
}
