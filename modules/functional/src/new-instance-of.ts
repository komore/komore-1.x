/**
 * Creates a function that instantiates a class using constructor parameters
 *
 * @param instanceClass Instance class
 * @returns Function that tests whether a value is an instance of the given class
 * @param T Instance type
 */
export function newInstanceOf<ConstructorType extends new (...args: any[]) => any>(
  instanceClass: ConstructorType
): (...constructorParameters: ConstructorParameters<ConstructorType>) => InstanceType<ConstructorType> {
  return (...constructorParameters) => new instanceClass(...constructorParameters);
}
