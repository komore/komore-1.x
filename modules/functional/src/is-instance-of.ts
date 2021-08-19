/**
 * Creates a function that tests whether a value is an instance of a given class
 * @param instanceClass Instance class
 * @returns Function that tests whether a value is an instance of the given class
 */
export function isInstanceOf<InstanceType>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  instanceClass: new (...args: any[]) => InstanceType
): (value: unknown) => value is InstanceType {
  return (value: unknown): value is InstanceType => value instanceof instanceClass;
}
