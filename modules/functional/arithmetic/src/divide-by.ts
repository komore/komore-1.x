/**
 * TODO
 * @param divisor 
 * @returns 
 */
export function divideBy<T extends number | bigint>(divisor: T): (dividend: T) => T {
  return dividend => dividend / divisor as T;
}
