/**
 * Creates a function that instantiates a class using constructor parameters
 *
 * @param instanceClass Instance class
 * @returns Function that tests whether a value is an instance of the given class
 * @param T Instance type
 */
export function newInstanceOf<T, ConstructorType extends new (...args: any[]) => T>(
  instanceClass: ConstructorType
): (...constructorParameters: ConstructorParameters<ConstructorType>) => T {
  return (...constructorParameters) => new instanceClass(...constructorParameters);
}
